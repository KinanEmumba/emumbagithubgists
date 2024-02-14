import { useContext } from 'react';
import { clientID, githubAuthURL } from '../../const-urls';
import './header.css';
import SearchBox from './search-box';
import HeaderUserAvatar from './header-user-avatar';
import { AuthContext } from '../../App';
import { CircularProgress } from '@mui/material';

const LoginButton = () => {
return (
  <button
    className={'loginButton'}
    onClick={() => {
      window.location.replace(`${githubAuthURL}?client_id=${clientID}`)
    }}
  >
    Login
  </button>
);
}

const Header = () => {
  const contextValue = useContext(AuthContext);
  const loading = contextValue?.loading;
  const user = contextValue?.user;
  return (
    <>
      <div className={'main'}>
        <span className={'logoText'}>Emumba</span>
        {loading ? <CircularProgress /> : <div className='rightArea'>
          <SearchBox />
          {user ?
            <HeaderUserAvatar /> :
            <LoginButton />
          }
        </div>}
      </div>
    </>
  )
}

export default Header