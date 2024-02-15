import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { formatRelative } from 'date-fns';
import useFileFetcher from '../shared-components/file-fetcher';
import { GistDataType } from '../../types';
import InContentAvatar from '../shared-components/in-content-avatar';
import { FlexRow, StyledDate, StyledFilename, StyledUsername } from './gist-cards-styles';

const GistSingleCard = ({
  row
}: {
  row: GistDataType,
}) => {
  const fileArray = row.files && Object.keys(row.files) ;
  const firstKey = fileArray && fileArray[0];
  const firstObject = row.files && firstKey && row.files[firstKey];
  const fileURI = firstObject && firstObject.raw_url;
  const {fileData} : {fileData: string} = useFileFetcher({fileURI});
  
  return (
    <Card sx={{ width: 320, margin: 1}}>
      <CardContent sx={{ height: 200 }}>
        <Typography sx={{ fontSize: 14, textWrap: 'wrap' }} color="text.secondary">
          {fileData && fileData.substring(0, 150) + '...'}
        </Typography>
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