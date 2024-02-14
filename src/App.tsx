import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { SharedContextType, } from './types';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app-routes';
import useAppUserContext from './components/shared-components/app-user-context';
import { theme } from './components/shared-components/app-theme';

export const AuthContext = createContext<SharedContextType>(null);

function App() {
  const {userToken, user, signout} = useAppUserContext();
  
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



