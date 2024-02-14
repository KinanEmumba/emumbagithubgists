import { useContext } from 'react';
import { clientID, githubAuthURL } from '../../const-urls';
import SearchBox from './search-box';
import HeaderUserAvatar from './header-user-avatar';
import { AuthContext } from '../../App';
import { CircularProgress } from '@mui/material';
import { RightAreaDiv, StyledHeaderView, StyledLoginButton, StyledLogoText } from './header-styles';


const LoginButton = () => {
return (
  <StyledLoginButton
    onClick={() => {
      window.location.replace(`${githubAuthURL}?client_id=${clientID}`)
    }}
  >
    Login
  </StyledLoginButton>
);
}

const Header = () => {
  const contextValue = useContext(AuthContext);
  const loading = contextValue?.loading;
  const user = contextValue?.user;
  const gotoHome = contextValue?.gotoHome;
  return (
    <>
      <StyledHeaderView>
        <StyledLogoText onClick={()=> gotoHome()}>Emumba Gists</StyledLogoText>
        {loading ? <CircularProgress /> : <RightAreaDiv>
          <SearchBox />
          {user ?
            <HeaderUserAvatar /> :
            <LoginButton />
          }
        </RightAreaDiv>}
      </StyledHeaderView>
    </>
  )
}

export default Header