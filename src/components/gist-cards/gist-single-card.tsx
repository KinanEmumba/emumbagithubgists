import { Card, CardActions, CardContent, Divider } from '@mui/material';
import { formatRelative } from 'date-fns';
import { GistDataType } from '../../types';
import InContentAvatar from '../shared-components/in-content-avatar';
import { FlexRow, StyledDate, StyledFilename, StyledUsername } from './gist-cards-styles';
import CodeView from '../shared-components/code-view';

const GistSingleCard = ({
  row
}: {
  row: GistDataType,
}) => {
  const filesObject = row.files;
  const fileArray = Object.keys(filesObject);
  const firstKey = fileArray[0];
  const firstObject = filesObject[firstKey];
  const fileURI = firstObject.raw_url;
  
  return (
    <Card sx={{ width: 320, margin: 1}}>
      <CardContent sx={{ height: 200 }}>
        <CodeView fileURI={fileURI} />
      </CardContent>
      <Divider />
      <CardActions sx={{ minHeight: 100, maxHeight: 100 }}>
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
      </CardActions>
    </Card>
  )
}

export default GistSingleCard;