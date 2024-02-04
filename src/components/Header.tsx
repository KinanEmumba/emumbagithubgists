import { clientID, githubAuthURL } from '../constURLs';
import { UserType } from '../types';
import './Header.css';
import SearchBox from './SearchBox';

const Header = ({user} : {user: UserType | undefined}) => {
  return (
    <>
      <div className={'main'}>
        <span className={'logoText'}>Emumba</span>
        <div className='rightArea'>
          <SearchBox />
          {!user && <button
            className={'loginButton'}
            onClick={() => {
              window.location.replace(`${githubAuthURL}?client_id=${clientID}`)
            }}
          >
            Login
          </button>}
        </div>
      </div>
    </>
  )
}

export default Header