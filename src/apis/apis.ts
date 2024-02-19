import { useQuery } from "@tanstack/react-query";
import { githubGistsBaseURL, githubGistsPageSize, githubPublicGistsBaseURL, githubUserURL } from "../const-urls";
import { fetcher } from "./api-fetcher";
import { GistDataType } from "../types";

export const getGithubUser = () => {
  return fetcher({
    url: githubUserURL,
    method: 'GET',
  });
};

export const useGetPublicGists = ({ page }: { page: number }) => {
  const url = `${githubPublicGistsBaseURL}${githubGistsPageSize}&page=${page}`;
  return useQuery<GistDataType[], Error>({
    queryKey: ['publicGists', {page}],
    queryFn: () => fetcher({ url, method: 'GET' })
  });
};

export const useGetGistsByID = ({ id }: { id: string | number }) => {
  const url = `${githubGistsBaseURL}/${id}`;
  return useQuery<GistDataType, Error>({
    queryKey: ['singleGist', {id}],
    queryFn: () => fetcher({ url, method: 'GET' }),
    enabled: !!id && id !== '',
  });
};
