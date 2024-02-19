import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CircularProgress, Switch } from "@mui/material";
import { GistDataType, UserType } from "../../types";
import { useGetStarredGists, useGetUserGists } from "../../apis/apis";
import GistPage from "../gist-page/gist-page";
import {
  GistListContainer,
  GistSwitchContainer,
  StyledSwitchText,
  StyledUserAvatar,
  StyledUserName,
  StyledUserProfileButton,
  UserGistsMainDiv,
  UserGistsSide,
  UserInfoSide
} from "./user-gists-styles"

const Usergists = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {user, starred} : {user: UserType, starred: boolean} = location.state;
  console.log('starred', starred);
  const [enableUserGists, setEnableUserGists] = useState(!starred);
  const {isLoading: userLoading, data: userData, error: userError} = useGetUserGists({username: user?.login});
  const {isLoading: starLoading, data: starData, error: starError} = useGetStarredGists();

  const isLoading = enableUserGists? userLoading : starLoading;
  const data = enableUserGists? userData : starData;
  const error = enableUserGists? userError : starError;

  useEffect(() => setEnableUserGists(!starred), [starred]);
  
  const openGist = (gist: GistDataType) => {
    navigate('/gist', {state: {gist}});
  };

  return (
    <UserGistsMainDiv>
      <UserInfoSide>
        <StyledUserAvatar src={user?.avatar_url}/>
        <StyledUserName>{user?.name || user?.login}</StyledUserName>
        <StyledUserProfileButton onClick={() => window.open(user?.html_url, "_blank")}>
          View Github Profile
        </StyledUserProfileButton>
        <GistSwitchContainer>
          <StyledSwitchText>Toggle User/Starred Gists</StyledSwitchText>
          <Switch checked={enableUserGists} onChange={() => setEnableUserGists(prev => !prev)}/>
        </GistSwitchContainer>
      </UserInfoSide>
      <UserGistsSide>
        <StyledUserName>{enableUserGists ? 'User Gists' : 'Starred Gists'}</StyledUserName>
        {isLoading && <CircularProgress />}
        {data ?
          data.map((gist: GistDataType) => <GistListContainer key={gist.id} onClick={() => openGist(gist)}>
            <GistPage gistProp={gist} />
          </GistListContainer>) :
          error?.message
        }
      </UserGistsSide>
    </UserGistsMainDiv>
  )
}

export default Usergists