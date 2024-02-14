import { useEffect, useState } from 'react'
import { getGithubUser } from '../../apis/apis';
import { getTokenAPI } from '../../apis/github-oauth';
import { homePage } from '../../const-urls';
import { TokenType, UserType, ApiResponseErrorType } from '../../types';

const useAppUserContext = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const githubCode = params.get('code');
  const [code] = useState(githubCode);
  const [userToken, setUserToken] = useState<TokenType>(null);
  const [user, setUser] = useState<UserType>(null);
  const [loading, setLoading] = useState(!!githubCode);

  const signout = () => {
    sessionStorage.removeItem('githubTokenObject');
    setUserToken(null);
    window.location.replace(homePage);
  }
  
  useEffect(() => {
    const storedToken = sessionStorage.getItem('githubTokenObject');
    console.log('storedToken', storedToken);
    if (storedToken) setUserToken(JSON.parse(storedToken));
  }, []);
  
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      getGithubUser({token: userToken?.access_token})
      .then((user: UserType) => {
        setLoading(false);
        setUser(user);
      })
      .catch((err: ApiResponseErrorType) => {
        setLoading(false);
        console.log('user err is', err)
      })
    }
    if (userToken) getUser();
  }, [userToken]);
  

  useEffect(() => {
    const getToken = async () => {
      const token = await getTokenAPI({code});
      console.log('got token', token);
      window.location.replace(homePage);
    }
    if (code) getToken();
  }, [code]);

  return {userToken, user, loading, signout};
}

export default useAppUserContext