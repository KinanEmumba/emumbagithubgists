import { Avatar } from "@mui/material";
import { GistDataType } from "../sharedTypes";

const InContentAvatarSection = ({
  row,
  hideName
} : {
  row: GistDataType,
  hideName?: boolean
}) => {
  return (
    <div className='avatarContainer'>
      <Avatar className={'avatar'} src={row?.owner?.avatar_url} />
      {hideName? '' : row.owner?.login}
    </div>
  );
}

export default InContentAvatarSection;