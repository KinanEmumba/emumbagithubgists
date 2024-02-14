export const homePage = 'http://localhost:3000/';
export const appID = '813887';
export const clientID = 'Iv1.8a54821697c7a0bd';
export const clientSecret = '927b82c44bec748cec9d795817e4a8c592b80afb';

export const githubLoginURL = 'https://github.com/login/oauth';
export const githubAuthURL = `${githubLoginURL}/authorize`;
export const githubBaseTokenURL = `${githubLoginURL}/access_token`;
export const githubFullTokenURL = `${githubBaseTokenURL}?client_id=${clientID}&client_secret=${clientSecret}`;
export const githubCORSProxy = 'https://corsproxy.io';

export const githubAPIurl = 'https://api.github.com';
export const githubGistsBaseURL = `${githubAPIurl}/gists`;
export const githubPublicGistsBaseURL = `${githubGistsBaseURL}/public`;
export const pageSize = 12;
export const githubGistsPageSize = `?per_page=${pageSize}`;
export const githubUserURL = `${githubAPIurl}/user`;