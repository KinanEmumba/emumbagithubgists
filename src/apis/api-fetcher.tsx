import axios, { AxiosRequestConfig } from "axios";
import { ApiHeadersType, FetchParamsType } from "../types";
import { getTokenAPI } from "./github-oauth";

const headers: ApiHeadersType = {
	'Accept': 'application/vnd.github+json',
	'X-GitHub-Api-Version': '2022-11-28'
};

let refreshAttempts = 0;

export const fetcher = async ({url, method, token} : FetchParamsType) => {
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	console.log(`using method ${method}\nand headers ${JSON.stringify(headers)},\ncalling API ${url}`);
	try {
    const config: AxiosRequestConfig = {
      url,
      method: method || 'GET',
      headers,
    };
    const response = await axios(config);
    if (response.status === 401) {
      return { status: 401, message: 'Expired token' };
    }
    const jsonResp = response.data;
    console.log('API response:', jsonResp);
    if (jsonResp.status === 401) {
      refreshAttempts += 1;
      if (refreshAttempts === 2) {
        refreshAttempts = 0;
        return Promise.resolve(jsonResp);
      }
      return refreshTokenAndRecallAPI({ url, method });
    }
    return Promise.resolve(jsonResp);
  } catch (error) {
    console.log('API error:', error);
    return Promise.reject(error);
  }
};

export const refreshTokenAndRecallAPI = async ({url, method} : FetchParamsType) : Promise<unknown> => {
	const storedToken = await sessionStorage.getItem('githubTokenObject');
	const { refresh_token } = storedToken? JSON.parse(storedToken) : null;
	const newToken = await getTokenAPI({refreshToken: refresh_token});
	return fetcher({url, method, token: newToken.access_token});
}