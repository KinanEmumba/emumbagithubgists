import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { StyledGistOptions, OptionContainer } from './gist-page-styles';
import { OwnerUserType } from '../../types';
import { useContext } from 'react';
import { AuthContext } from '../../App';


const GistOptions = ({
  owner,
  onEdit,
  onDelete,
  onStar,
  onFork,
} : {
  owner?: OwnerUserType,
  onEdit?: () => void,
  onDelete?: () => void,
  onStar?: () => void,
  onFork?: () => void,
}) => {
  const contextValue = useContext(AuthContext);
  const user = contextValue?.user;
  const isOwner = user?.id === owner?.id;
  
  return (
    <StyledGistOptions>
      {isOwner && <OptionContainer onClick={() => onEdit && onEdit()}><CreateIcon /> Edit </OptionContainer>}
      {isOwner && <OptionContainer onClick={() => onDelete && onDelete()}><DeleteForeverIcon /> Delete</OptionContainer>}
      <OptionContainer onClick={() => onStar && onStar()}>{owner?.starred_url ? <StarIcon/> : <StarBorderIcon/>} Star</OptionContainer>
      <OptionContainer onClick={() => onFork && onFork()}><ForkRightIcon /> Fork</OptionContainer>
    </StyledGistOptions>
  )
}

export default GistOptions;