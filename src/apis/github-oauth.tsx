import axios from 'axios';
import { githubCORSProxy, githubFullTokenURL } from "../const-urls";
const githubTokenInstance = axios.create();

export const getTokenAPI = async ({
  code,
  refreshToken
}: {
  code?: string | null,
  refreshToken?: string | null
}) => {
  const codeURL = `${githubFullTokenURL}&code=${code}`;
  const refreshURL = `${githubFullTokenURL}&grant_type=refresh_token&refresh_token=${refreshToken}`
  const apiURL = encodeURIComponent(code ? codeURL : refreshURL);
  const url = `${githubCORSProxy}/?${apiURL}`;

  githubTokenInstance.interceptors.request.use(
    (config) => {
      config.headers.Accept = 'application/json';
      console.log(`using method ${config.method}\nand headers ${JSON.stringify(config.headers)}\ncalling API ${url}`);
      return config;
    }
  );

  try {
    const response = await githubTokenInstance.post(url);
    const jsonResp = response.data;
    console.log('GitHub token JSON response:', jsonResp);
    sessionStorage.setItem('githubTokenObject', JSON.stringify(jsonResp));
    return jsonResp;
  } catch (error) {
    console.log('GitHub error:', error);
    return error;
  }
}