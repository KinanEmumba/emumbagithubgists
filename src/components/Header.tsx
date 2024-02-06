import { useContext } from 'react';
import { clientID, githubAuthURL } from '../constURLs';
import './Header.css';
import SearchBox from './SearchBox';
import UserAvatar from './UserAvatar';
import { AuthContext } from '../App';

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
  return (
    <>
      <div className={'main'}>
        <span className={'logoText'}>Emumba</span>
        <div className='rightArea'>
          <SearchBox />
          {contextValue?.user ?
            <UserAvatar user={contextValue?.user} signout={contextValue?.signout}/> :
            <LoginButton />
          }
        </div>
      </div>
    </>
  )
}

export default Header