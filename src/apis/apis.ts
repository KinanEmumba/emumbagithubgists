import { useQuery } from "@tanstack/react-query";
import { githubGistsPageSize, githubPublicGistsBaseURL, githubUserURL } from "../const-urls";
import { fetcher } from "./api-fetcher";

export const useGetPublicGists = ({ page }: { page: number }) => {
  const url = `${githubPublicGistsBaseURL}${githubGistsPageSize}&page=${page}`;
  return useQuery({queryKey: ['publicGists', {page}], queryFn: () => fetcher({ url, method: 'GET' }) });
};

export const getGithubUser = ({token} : {token?: string | null}) => {
  return fetcher({
    url: githubUserURL,
    method: 'GET',
    token,
  });
};
