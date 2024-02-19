import { useEffect, useState } from 'react'
import { getGithubUser } from '../../apis/apis';
import { getTokenAPI } from '../../apis/github-oauth';
import { homePage } from '../../const-urls';
import { TokenType, UserType } from '../../types';

const useAppUserContext = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const githubCode = params.get('code');
  const [code] = useState(githubCode);

  const storedToken = sessionStorage.getItem('githubTokenObject');
  const [userToken, setUserToken] = useState<TokenType>(
    storedToken ? JSON.parse(storedToken) : null
  );

  const [user, setUser] = useState<UserType>(null);
  const [loading, setLoading] = useState(!!githubCode);

  const gotoHome = () => {
    window.location.replace(homePage);
  };

  const signout = () => {
    sessionStorage.removeItem('githubTokenObject');
    setUserToken(null);
    gotoHome();
  };
  
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const user = await getGithubUser();
        setLoading(false);
        setUser(user);
      } catch (err) {
        setLoading(false);
        console.log('user err is', err);
      }
    }
    if (userToken) getUser();
  }, [userToken]);
  

  useEffect(() => {
    const getToken = async () => {
      await getTokenAPI({code});
      gotoHome();
    }
    if (code) getToken();
  }, [code]);

  return {userToken, user, loading, gotoHome, signout};
}

export default useAppUserContext