import { clientID, githubAuthURL } from '../constURLs';
import './Header.css';
import SearchBox from './SearchBox';

const Header = ({userToken} : {userToken: object | null}) => {
  return (
    <>
      <div className={'main'}>
        <span className={'logoText'}>Emumba</span>
        <div className='rightArea'>
          <SearchBox />
          {!userToken && <button
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