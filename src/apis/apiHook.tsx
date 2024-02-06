import { useEffect, useState } from 'react';
import { ApiResponseErrorType, ApiHeadersType, FetchParamsType } from '../types';
import { getTokenAPI } from './githubOAuth';

const headers: ApiHeadersType = {
	'Accept': 'application/vnd.github+json',
	'X-GitHub-Api-Version': '2022-11-28'
};

let refeshAttempts = 0;

export const fetcher = ({url, method, token} : FetchParamsType) => {
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	return fetch(url, {headers, method: method || 'GET'})
	.then( async (resp) => {
		if (resp.status === 401) {
			return {status: 401, message: 'expired token'}
		}
		return resp.json()
	})
	.then(jsonResp => {
		console.log('API resp', jsonResp);
		if (jsonResp.status === 401) {
			refeshAttempts += 1;
			if (refeshAttempts === 2) {
				refeshAttempts = 0;
				return Promise.resolve(jsonResp);
			}
			return refreshTokenAndRecallAPI({url, method})
		}
		return Promise.resolve(jsonResp);
	})
	.catch(err => {
		console.log('API err', err)
		return Promise.reject(err);
	})
};

export const refreshTokenAndRecallAPI = async ({url, method} : FetchParamsType) : Promise<unknown> => {
	const storedToken = await sessionStorage.getItem('githubTokenObject');
	const { refresh_token } = storedToken? JSON.parse(storedToken) : null;
	const newToken = await getTokenAPI({refreshToken: refresh_token});
	return fetcher({url, method, token: newToken.access_token});
}

const useGistAPI = (props: FetchParamsType) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<ApiResponseErrorType>(null);
	const {
		url,
		method,
		token
	} = props;
	
	useEffect(() => {
		const gistAPI = () => {
			setLoading(true);
			setError(null);
			fetcher({url, method, token})
			.then(jsonResp => {
				setData(jsonResp);
				setLoading(false);
			})
			.catch(err => {
				setError(err);
				setLoading(false);
			})
		};
		gistAPI();
		
	}, [method, token, url]);

  return {
		data, loading, error
	};
}

export default useGistAPI;