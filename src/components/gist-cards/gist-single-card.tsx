import { Card, CardActions, CardContent, Divider } from '@mui/material';
import { GistDataType } from '../../types';
import CodeView from '../shared-components/code-view';
import GistUserInfo from '../shared-components/gist-user-info';
import { useNavigate } from 'react-router-dom';

const GistSingleCard = ({
  row
}: {
  row: GistDataType,
}) => {
  const navigate = useNavigate();
  
  const filesObject = row.files;
  const fileArray = Object.keys(filesObject);
  const firstKey = fileArray[0];
  const firstObject = filesObject[firstKey];
  const fileURI = firstObject.raw_url;

  const openGist = (gist: GistDataType) => {
    navigate('/gist', {state: {gist}});
  };
  
  return (
    <Card sx={{ width: '25vw', margin: 1}} onClick={()=> openGist(row)}>
      <CardContent sx={{
        height: '25vh',
        paddingTop: '0px',
        paddingBottom: '0px'
      }}>
        <CodeView fileURI={fileURI} />
      </CardContent>
      <Divider />
      <CardActions sx={{ minHeight: 100, maxHeight: 100 }}>
        <GistUserInfo row={row} />
      </CardActions>
    </Card>
  )
}

export default GistSingleCard;