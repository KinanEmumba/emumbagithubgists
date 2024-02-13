import { useContext, useState } from 'react';
import { Avatar, Divider, Menu, MenuItem } from '@mui/material';
import './UserAvatar.css';
import { AuthContext } from '../App';
import { Link, Navigate } from 'react-router-dom';

const HeaderUserAvatar = () => {
  console.log('PROPSA', this);
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
    Navigate({to:{ pathname: "/usergists" }});
  };
  
  const starredGists = () => {

  };
  
  const help = () => {

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
        <MenuItem><Link to={{ pathname: "/usergists"}}>Your Gists</Link></MenuItem>
        <MenuItem>Starred gists</MenuItem>
        <MenuItem onClick={help}>Help</MenuItem>
        <Divider />
        <MenuItem onClick={githubProfile}>Your Githuib profile</MenuItem>
        <MenuItem onClick={signOut}>Signout</MenuItem>
      </Menu>
    </>
  )
}

export default HeaderUserAvatar;