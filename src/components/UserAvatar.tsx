import { useContext, useState } from 'react';
import './UserAvatar.css';
import { Avatar, Divider, Menu, MenuItem } from '@mui/material';
import { AuthContext } from '../App';

const UserAvatar = () => {
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

  const githubProfile = () => {
    window.open(user?.html_url, "_blank");
  }

  const signOut = () => {
    contextValue?.signout();
  }
  
  return (
    <>
      <Avatar className={'circleContainer'} src={user?.avatar_url} onClick={avatarClicked}/>
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
        <MenuItem onClick={handleClose}>Your gists</MenuItem>
        <MenuItem onClick={handleClose}>Starred gists</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <Divider />
        <MenuItem onClick={githubProfile}>Your Githuib profile</MenuItem>
        <MenuItem onClick={signOut}>Signout</MenuItem>
      </Menu>
    </>
  )
}

export default UserAvatar