import { githubGistsPageSize, githubPublicGistsBaseURL, githubUserURL } from "../constURLs";
import useGistAPI, { fetcher } from "./apiHook";

export const useGetPublicGists = ({page} : {page: number}) => {
  return useGistAPI({
    url: `${githubPublicGistsBaseURL}${githubGistsPageSize}&page=${page}`,
    method: 'GET'
  });
};

export const getGithubUser = ({token} : {token?: string | null}) => {
  return fetcher({
    url: githubUserURL,
    method: 'GET',
    token,
  });
};
