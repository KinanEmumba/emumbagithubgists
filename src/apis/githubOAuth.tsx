import { clientID, clientSecret, githubCORSProxy, githubTokenURL } from "../constURLs";

export const getTokenFromCode = (code: string | null) => {
  const apiURL = encodeURIComponent(`${githubTokenURL}?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`);
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