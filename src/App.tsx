import { createContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { SharedContextType, } from './types';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app-routes';
import useAppUserContext from './components/shared-components/app-user-context';
import { theme } from './components/shared-components/app-theme';
import Header from './components/header/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AuthContext = createContext<SharedContextType>(null);

function App() {
  const {userToken, user, loading, gotoHome, signout} = useAppUserContext();
  const queryClient = new QueryClient();
  
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{userToken, user, loading, gotoHome, signout}}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Header/>
            <AppRoutes />
          </QueryClientProvider>
        </ThemeProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App



