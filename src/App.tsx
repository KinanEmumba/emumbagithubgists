import { createContext, useEffect, useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Homepage from './pages/Homepage';
import { homePage } from './constURLs';
import { getTokenAPI } from './apis/githubOAuth';
import { getGithubUser } from './apis/apis';
import { ApiResponseErrorType, SharedContextType, TokenType, UserType } from './types';

export const AuthContext = createContext<SharedContextType>(null);

function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const githubCode = params.get('code');
  const [code] = useState(githubCode);
  const [userToken, setUserToken] = useState<TokenType>(null);
  const [user, setUser] = useState<UserType>(null);

  
  useEffect(() => {
    const getUser = async () => {
      getGithubUser({token: userToken?.access_token})
      .then((user: UserType) => {
        setUser(user);
      })
      .catch((err: ApiResponseErrorType) => {
        console.log('user err is', err)
      })
    }
    if (userToken) getUser();
  }, [userToken]);
  
  useEffect(() => {
    const storedToken = sessionStorage.getItem('githubTokenObject');
    console.log('storedToken', storedToken);
    if (storedToken) setUserToken(JSON.parse(storedToken));
  }, []);

  useEffect(() => {
    const getToken = async () => {
      const token = await getTokenAPI({code});
      console.log('got token', token);
      window.location.replace(homePage);
    }
    if (code) getToken();
  }, [code]);

  return (
    <AuthContext.Provider value={{userToken, user}}>
      <Homepage />
    </AuthContext.Provider>
  )
}

export default App
