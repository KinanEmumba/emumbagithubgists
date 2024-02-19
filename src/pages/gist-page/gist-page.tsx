import { useLocation } from 'react-router-dom';
import { CardTitleContainer, FileInfoArea, MainDiv } from './gist-page-styles';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GistUserInfo from '../../components/shared-components/gist-user-info';
import GistOptions from './gist-options-ui';
import CodeView from '../../components/shared-components/code-view';
import { GistDataType } from '../../types';

const GistPage = () => {
  const location = useLocation();
  const {gist} : {gist: GistDataType} = location.state;

  const filesObject = gist.files;
  const fileArray = Object.keys(filesObject);
  const firstKey = fileArray[0];
  const firstObject = filesObject[firstKey];
  const fileURI = firstObject.raw_url;

  return (
    <MainDiv>
      <FileInfoArea>
        <GistUserInfo row={gist}/>
        <GistOptions />
      </FileInfoArea>
      <Card sx={{ width: '75vw', alignSelf: 'center'}}>
        <CardHeader title = {
            <CardTitleContainer>
              <CodeIcon sx={{marginRight: '10px'}}/>
              {firstObject.filename}
            </CardTitleContainer>
        }/>
        <CardContent sx={{ height: '70vh', borderTop: '1px solid lightgrey', paddingTop: '0px', paddingBottom: '0px' }}>
          <CodeView fileURI={fileURI} />
        </CardContent>
        <Divider />
      </Card>
    </MainDiv>
  )
}

export default GistPage;