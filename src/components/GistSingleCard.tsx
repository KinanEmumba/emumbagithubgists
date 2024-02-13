import { Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { formatRelative } from 'date-fns';
import useFileFetcher from './FileFetcher';
import { GistDataType } from '../types';
import InContentAvatarSection from './InContentAvatarSection';

const GistSingleCard = ({
  row
}: {
  row: GistDataType,
}) => {
  const fileArray = row.files && Object.keys(row.files);
  const firstKey: string = fileArray && fileArray[0] || '';
  const firstObject = row.files && firstKey && row.files[fileArray[0]];
  const fileURI = firstObject.raw_url || '';
  const {fileData} : {fileData: string} = useFileFetcher({fileURI});
  
  return (
    <Card sx={{ width: 300, margin: 1}}>
      <CardContent sx={{ height: 150 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {fileData && fileData.substring(0, 150) + '...'}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ maxHeight: 100 }}>
        <div className={'flexRow truncatedDiv'}>
          <InContentAvatarSection row={row} hideName/>
          <div style={{flexDirection: 'column'}}>
            <div>
              {`${row.owner?.login} / ${row.description}`}
            </div>
            <div>
              {`Created ${row.created_at && formatRelative(new Date(), new Date(row.created_at))}`}
            </div>
          </div>
        </div>
      </CardActions>
    </Card>
  )
}

export default GistSingleCard;