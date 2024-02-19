import { useContext, useState } from 'react';
import { Divider, Menu, MenuItem } from '@mui/material';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { StyledAvatar } from './header-styles';

const HeaderUserAvatar = () => {
  const navigate = useNavigate();
  const contextValue = useContext(AuthContext);
  const user = contextValue?.user;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const avatarClicked = (e: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const yourGists = () => {
    handleClose();
    navigate('/usergists', {state: {user, starred: false}});
  };
  
  const starredGists = () => {
    handleClose();
    navigate('/usergists', {state: {user, starred: true}});
    
  };
  
  const createGist = () => {
    handleClose();
    navigate('/create');

  };

  const githubProfile = () => {
    handleClose();
    window.open(user?.html_url, "_blank");
  }
  
  const signOut = () => {
    handleClose();
    contextValue?.signout();
  }
  
  return (
    <>
      <StyledAvatar src={user?.avatar_url} onClick={avatarClicked}/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(handleClose)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Signed in as {user?.name || user?.login}</MenuItem>
        <Divider />
        <MenuItem onClick={() => yourGists()}>Your Gists</MenuItem>
        <MenuItem onClick={() => starredGists()}>Starred Gists</MenuItem>
        <MenuItem onClick={()=> createGist()}>Create Gist</MenuItem>
        <Divider />
        <MenuItem onClick={() => githubProfile()}>Your Githuib profile</MenuItem>
        <MenuItem onClick={() => signOut()}>Signout</MenuItem>
      </Menu>
    </>
  )
}

export default HeaderUserAvatar;