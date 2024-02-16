import { useContext } from 'react';
import { clientID, githubAuthURL } from '../../const-urls';
import SearchBox from './search-box';
import HeaderUserAvatar from './header-user-avatar';
import { AuthContext } from '../../App';
import { CircularProgress } from '@mui/material';
import { RightAreaDiv, StyledHeaderView, StyledLogoText } from './header-styles';
import AppButton from '../shared-components/app-button';
import { GistDataType } from '../../types';

const Header = () => {
  const contextValue = useContext(AuthContext);
  const loading = contextValue?.loading;
  const user = contextValue?.user;

  const searchResult = ({
    data,
    error
  }: {
    data?: GistDataType
    error?: string
  }) => {
    console.log('searchedGist data:', data);
    console.log('searchedGist error:', error);
  };

  return (
    <>
      <StyledHeaderView>
        <StyledLogoText onClick={()=> contextValue?.gotoHome()}>Emumba Gists</StyledLogoText>
        {loading ? <CircularProgress /> : <RightAreaDiv>
          <SearchBox searchResult={searchResult}/>
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