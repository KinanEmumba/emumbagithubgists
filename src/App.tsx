import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { SharedContextType, } from './types';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app-routes';
import useAppUserContext from './components/shared-components/app-user-context';
import { theme } from './components/shared-components/app-theme';
import Header from './components/header/header';
import { MainDiv } from './components/shared-components/styled-main-view';

export const AuthContext = createContext<SharedContextType>(null);

function App() {
  const {userToken, user, loading, signout} = useAppUserContext();
  
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{userToken, user, loading, signout}}>
        <ThemeProvider theme={theme}>
          <Header/>
          <MainDiv>
            <AppRoutes />
          </MainDiv>
        </ThemeProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App



