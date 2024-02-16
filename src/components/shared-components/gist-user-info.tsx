import { formatRelative } from 'date-fns';
import { GistDataType } from '../../types';
import { FlexRow, StyledUsername, StyledFilename, StyledDate } from '../gist-cards/gist-cards-styles';
import InContentAvatar from './in-content-avatar';

const GistUserInfo = ({
  row
}: {
  row: GistDataType,
}) => {
  return (
    <FlexRow>
      <InContentAvatar row={row} hideName/>
      <div style={{flexDirection: 'column'}}>
        <StyledUsername>
          {`${row.owner?.login}`}
        </StyledUsername>
        <StyledFilename> {`${row.description}`.substring(0, 27)+ '...'} </StyledFilename>
        <StyledDate>
          {`Created ${row.created_at && formatRelative(new Date(), new Date(row.created_at))}`}
        </StyledDate>
      </div>
    </FlexRow>
  )
}

export default GistUserInfo;