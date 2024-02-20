import axios, { AxiosError } from "axios";
import { FetchParamsType } from "../types";
import { getTokenAPI } from "./github-oauth";
import { githubPAT } from "../const-urls";

let refreshAttempts = 0;
const headers = {
  Accept: 'application/vnd.github+json',
  ['X-GitHub-Api-Version']: '2022-11-28',
  Authorization: `Bearer ${githubPAT}`,
};

export const fetcher = async ({url, method, body} : FetchParamsType) => {
  console.log(`calling API\n${url}\nusing method ${method}\nand headers\n${JSON.stringify({headers})}`);
  if (body) console.log(`\nand body\n${JSON.stringify(body || {})}`);
  let response;
  try {
    switch (method) {
      case 'POST': response = await axios.post(url, body, {headers}); break;
      case 'PUT': response = await axios.put(url, body, {headers}); break;
      case 'DELETE': response = await axios.delete(url, {headers}); break;
      default: response = await axios.get(url, {headers});
    }
    console.log('API response:', response);
    const jsonResp = response.data;
    return Promise.resolve(jsonResp);
    
  } catch (error) {
    console.log('API error:', error);
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        refreshAttempts += 1;
        if (refreshAttempts === 2) {
          refreshAttempts = 0;
          return Promise.resolve(error);
        }
        return refreshTokenAndRecallAPI({ url, method, body });
      }
    }
    return Promise.reject(error);
  }
};

export const refreshTokenAndRecallAPI = async ({url, method, body} : FetchParamsType) : Promise<unknown> => {
	const storedToken = await sessionStorage.getItem('githubTokenObject');
	const { refresh_token } = storedToken? JSON.parse(storedToken) : null;
	await getTokenAPI({refreshToken: refresh_token});
	return fetcher({url, method, body});
}