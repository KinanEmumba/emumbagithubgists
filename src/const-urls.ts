export const homePage = import.meta.env.VITE_HOMEPAGE;
export const appID = import.meta.env.VITE_APP_ID;
export const githubPAT = import.meta.env.VITE_GITHUB_PAT;
export const clientID = import.meta.env.VITE_CLIENT_ID;
export const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

export const githubLoginURL = import.meta.env.VITE_GITHUB_LOGIN_URL;
export const githubAuthURL = `${githubLoginURL}/authorize`;
export const githubBaseTokenURL = `${githubLoginURL}/access_token`;
export const githubFullTokenURL = `${githubBaseTokenURL}?client_id=${clientID}&client_secret=${clientSecret}`;
export const githubCORSProxy = import.meta.env.VITE_GITHUB_CORS_PROXY;

export const githubAPIurl = import.meta.env.VITE_GITHUB_API_URL;
export const githubGistsBaseURL = `${githubAPIurl}/gists`;
export const githubPublicGistsBaseURL = `${githubGistsBaseURL}/public`;
export const pageSize = import.meta.env.VITE_PAGE_SIZE;
export const githubGistsPageSize = `?per_page=${pageSize}`;
export const githubUserURL = `${githubAPIurl}/user`;