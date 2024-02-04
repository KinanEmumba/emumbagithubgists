import { githubGistsPageSize, githubPublicGistsBaseURL } from "../constURLs";
import useGistAPI from "./apiHook";

export const useGetPublicGists = ({page} : {page: number}) => {
  return useGistAPI({
    url: `${githubPublicGistsBaseURL}${githubGistsPageSize}&page=${page}`,
    method: 'GET'
  });
};