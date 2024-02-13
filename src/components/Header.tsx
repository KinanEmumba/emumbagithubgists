import { useContext } from 'react';
import { clientID, githubAuthURL } from '../constURLs';
import './Header.css';
import SearchBox from './SearchBox';
import HeaderUserAvatar from './HeaderUserAvatar';
import { AuthContext } from '../App';
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

const Header = ({
  loading
} : {
  loading?: boolean
}) => {
  const contextValue = useContext(AuthContext);
  return (
    <>
      <div className={'main'}>
        <span className={'logoText'}>Emumba</span>
        {loading ? <CircularProgress /> : <div className='rightArea'>
          <SearchBox />
          {contextValue?.user ?
            <HeaderUserAvatar /> :
            <LoginButton />
          }
        </div>}
      </div>
    </>
  )
}

export default Header