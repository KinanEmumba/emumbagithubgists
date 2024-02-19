import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { StyledGistOptions, OptionContainer } from './gist-page-styles';


const GistOptions = ({
  filled,
  onEdit,
  onDelete,
  onStar,
  onFork,
} : {
  filled?: boolean
  onEdit?: () => void
  onDelete?: () => void
  onStar?: () => void
  onFork?: () => void
}) => {
  return (
    <StyledGistOptions>
      <OptionContainer onClick={() => onEdit && onEdit()}><CreateIcon /> Edit </OptionContainer>
      <OptionContainer onClick={() => onDelete && onDelete()}><DeleteForeverIcon /> Delete</OptionContainer>
      <OptionContainer onClick={() => onStar && onStar()}>{filled ? <StarBorderIcon/> : <StarIcon/>} Star</OptionContainer>
      <OptionContainer onClick={() => onFork && onFork()}><ForkRightIcon /> Fork</OptionContainer>
    </StyledGistOptions>
  )
}

export default GistOptions;