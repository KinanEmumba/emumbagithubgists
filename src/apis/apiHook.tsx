import { useEffect, useState } from 'react';

type headersType = {
	'Accept': string,
	'X-GitHub-Api-Version': string,
	'Authorization'?: string
};

const headers: headersType = {
	'Accept': 'application/vnd.github+json',
	'X-GitHub-Api-Version': '2022-11-28'
};

export type errorType = null | {
  message?: string
};

type params = {
	url: string
	method?: string
	token?: string
};

export type apiRespType = {
	data: null | object,
	loading: boolean,
	error: errorType
};

const useGistAPI = (props: params) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<errorType>(null);
	const {
		url,
		method,
		token
	} = props;
	
	useEffect(() => {
		const gistAPI = () => {
			if (token) {
				headers['Authorization'] = `Bearer ${token}`;
			}
			setLoading(true);
			setError(null);
			console.log('calling API', url);
			fetch(url, {headers, method: method || 'GET'})
			.then(resp => resp.json())
			.then(jsonResp => {
				console.log('API resp', jsonResp);
				setData(jsonResp);
				setLoading(false);
			})
			.catch(err => {
				console.log('API err', err)
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