import { createContext, useEffect, useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';
import Homepage from './pages/Homepage/Homepage';
import { homePage } from './constURLs';
import { getTokenAPI } from './apis/githubOAuth';
import { getGithubUser } from './apis/apis';
import { ApiResponseErrorType, SharedContextType, TokenType, UserType } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usergists from './pages/Usergists/Usergists';

export const AuthContext = createContext<SharedContextType>(null);

function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const githubCode = params.get('code');
  const [code] = useState(githubCode);
  const [userToken, setUserToken] = useState<TokenType>(null);
  const [user, setUser] = useState<UserType>(null);

  const signout = () => {
    sessionStorage.removeItem('githubTokenObject');
    setUserToken(null);
  }
  
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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#5acba1',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });
  
  return (
    <AuthContext.Provider value={{userToken, user, signout}}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/usergists" element={<Usergists />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}

export default App



