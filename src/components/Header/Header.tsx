import { useContext } from 'react';
import { clientID, githubAuthURL } from '../../const-urls';
import SearchBox from './search-box';
import HeaderUserAvatar from './header-user-avatar';
import { AuthContext } from '../../App';
import { CircularProgress } from '@mui/material';
import { RightAreaDiv, StyledHeaderView, StyledLogoText } from './header-styles';
import AppButton from '../shared-components/app-button';

const Header = () => {
  const contextValue = useContext(AuthContext);
  const loading = contextValue?.loading;
  const user = contextValue?.user;
  return (
    <>
      <StyledHeaderView>
        <StyledLogoText onClick={()=> contextValue?.gotoHome()}>Emumba Gists</StyledLogoText>
        {loading ? <CircularProgress /> : <RightAreaDiv>
          <SearchBox />
          {user ?
            <HeaderUserAvatar /> :
            <AppButton
              buttonText={'Login'}
              onClick={() => window.location.replace(`${githubAuthURL}?client_id=${clientID}`)}
            />
          }
        </RightAreaDiv>}
      </StyledHeaderView>
    </>
  )
}

export default Header