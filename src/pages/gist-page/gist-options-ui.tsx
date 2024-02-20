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
  onEdit?: (e: React.MouseEvent) => void,
  onDelete?: (e: React.MouseEvent) => void,
  onStar?: (e: React.MouseEvent) => void,
  onFork?: (e: React.MouseEvent) => void,
}) => {
  const contextValue = useContext(AuthContext);
  const user = contextValue?.user;
  const isOwner = user?.id === owner?.id;
  
  return (
    <StyledGistOptions>
      {isOwner && <OptionContainer onClick={(e) => onEdit && onEdit(e)}><CreateIcon /> Edit </OptionContainer>}
      {isOwner && <OptionContainer onClick={(e) => onDelete && onDelete(e)}><DeleteForeverIcon /> Delete</OptionContainer>}
      <OptionContainer onClick={(e) => onStar && onStar(e)}>{owner?.starred_url ? <StarIcon/> : <StarBorderIcon/>} Star</OptionContainer>
      <OptionContainer onClick={(e) => onFork && onFork(e)}><ForkRightIcon /> Fork</OptionContainer>
    </StyledGistOptions>
  )
}

export default GistOptions;