import { githubCORSProxy, githubFullTokenURL } from "../constURLs";

export const getTokenFromCode = async (code?: string | null, refreshToken?: string | null) => {
  const codeURL = `${githubFullTokenURL}&code=${code}`;
  const refreshURL = `${githubFullTokenURL}&grant_type=refresh_token&refresh_token=${refreshToken}`
  const apiURL = encodeURIComponent(code ? codeURL : refreshURL);
  const url = `${githubCORSProxy}/?${apiURL}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(resp =>resp.json())
  .then(jsonResp => {
    console.log('github token json resp is', jsonResp);
    return jsonResp
  })
  .catch(err => {
    console.log('githuib error', err)
    return err;
  });
}