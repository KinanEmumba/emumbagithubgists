import { createContext, useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { homePage } from './constURLs';
import { getTokenAPI } from './apis/githubOAuth';
import { getGithubUser } from './apis/apis';
import { ApiResponseErrorType, SharedContextType, TokenType, UserType } from './types';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

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
    window.location.replace(homePage);
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
    <BrowserRouter>
      <AuthContext.Provider value={{userToken, user, signout}}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App



