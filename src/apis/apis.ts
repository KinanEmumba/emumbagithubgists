import { githubGistsPageSize, githubPublicGistsBaseURL, githubUserURL } from "../const-urls";
import useGistAPI, { fetcher } from "./api-hook";

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
