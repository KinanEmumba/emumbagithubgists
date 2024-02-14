import {styled, Avatar } from '@mui/material';
import { GistDataType } from "../../types";

const StyledAvatarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const StyledAvatar = styled(Avatar)({
  margin: '20px',
  marginLeft: '0px',
  width: '50px',
  height: '50px',
});

const InContentAvatar = ({
  row,
  hideName
} : {
  row: GistDataType,
  hideName?: boolean
}) => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar src={row?.owner?.avatar_url} />
      {hideName? '' : row.owner?.login}
    </StyledAvatarContainer>
  );
}

export default InContentAvatar;