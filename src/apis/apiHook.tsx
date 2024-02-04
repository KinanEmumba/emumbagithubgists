import { useEffect, useState } from 'react';
import { ApiResponseErrorType, ApiHeadersType, FetchParamsType } from '../types';


const headers: ApiHeadersType = {
	'Accept': 'application/vnd.github+json',
	'X-GitHub-Api-Version': '2022-11-28'
};

export const fetcher = ({url, method, token} : FetchParamsType) => {
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	return fetch(url, {headers, method: method || 'GET'})
	.then(resp => resp.json())
	.then(jsonResp => {
		console.log('API resp', jsonResp);
		return Promise.resolve(jsonResp);
	})
	.catch(err => {
		console.log('API err', err)
		return Promise.reject(err);
	})
};

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