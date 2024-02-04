import { createContext, useEffect, useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Homepage from './pages/Homepage';
import { homePage } from './constURLs';
import { getTokenFromCode } from './apis/githubOAuth';

export const AuthContext = createContext(null);

function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const githubCode = params.get('code');
  const [code] = useState(githubCode);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('githubTokenObject');
    console.log('storedToken', storedToken);
    if (storedToken) setUserToken(JSON.parse(storedToken));
  }, []);

  useEffect(() => {
    const getToken = async () => {
      const token = await getTokenFromCode(code);
      console.log('got token', token);
      sessionStorage.setItem('githubTokenObject', JSON.stringify(token));
      window.location.replace(homePage);
    }
    if (code) getToken();
  }, [code]);

  return (
    <>
      {userToken && <Button variant="contained" onClick={() => {
        sessionStorage.removeItem('githubTokenObject');
        setUserToken(null);
      }}> CLEAR TOKEN </Button>}
      <AuthContext.Provider value={userToken}>
        <Homepage />
      </AuthContext.Provider> 
    </>
  )
}

export default App
