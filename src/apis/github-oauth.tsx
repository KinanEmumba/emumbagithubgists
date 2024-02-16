import axios from 'axios';
import { githubCORSProxy, githubFullTokenURL } from "../const-urls";

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

  try {
    const response = await axios.post(url, null, {
      headers: {
        Accept: 'application/json',
      },
    });

    const jsonResp = response.data;
    console.log('GitHub token JSON response:', jsonResp);
    
    sessionStorage.setItem('githubTokenObject', JSON.stringify(jsonResp));
    return jsonResp;
  } catch (error) {
    console.log('GitHub error:', error);
    return error;
  }
}