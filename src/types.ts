
export type ApiHeadersType = {
  'Accept': string,
	'X-GitHub-Api-Version': string,
	'Authorization'?: string
};

export type ApiResponseErrorType = null | {
  message?: string
};

export type FetchParamsType = {
  url: string
	method?: string
	token?: string | null
};

export type ApiRespType = {
  data: null | object,
	loading: boolean,
	error: ApiResponseErrorType
};

export type TokenType = null | {
  access_token?: string,
  refresh_token?: string,
};

export type UserType = null | {
  id?: string,
  avatar_url?: string,
  name?: string,
  email?: string,
};

export type SharedContextType = null | {
  user?: UserType,
  userToken?: TokenType,
};
