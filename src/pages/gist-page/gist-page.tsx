import { useContext } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate, } from 'react-router-dom';
import { CardTitleContainer, FileInfoArea, MainDiv } from './gist-page-styles';
import { Card, CardContent, CardHeader, CircularProgress, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GistUserInfo from '../../components/shared-components/gist-user-info';
import GistOptions from './gist-options-ui';
import CodeView from '../../components/shared-components/code-view';
import { GistDataType } from '../../types';
import { useDeleteGist } from '../../apis/apis';
import { AuthContext } from '../../App';
import { gistFileURL } from '../../components/shared-components/utils';

const GistPage = ({gistProp, list} : {gistProp?: GistDataType, list?: boolean}) => {
  const contextValue = useContext(AuthContext);
  const user = contextValue?.user;

  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {gist} : {gist: GistDataType} = location.state;
  const localGist = gistProp || gist;
  const onDeletion = async () => {
    await queryClient.invalidateQueries({ queryKey: ['userGists', 'starredGists'] });
    navigate('/usergists', {state: {user, starred: false}});
  };
  const deleteGist = useDeleteGist({id: localGist && localGist.id || '', onDeletion});

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteGist.mutate();
  }
  
  const onEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/create', {state: {gist: localGist}});
  }
  
  const onStar = (e: React.MouseEvent) => {
    e.stopPropagation();
    
  };
  
  const onFork = (e: React.MouseEvent) => {
    e.stopPropagation();
    
  };

  const openGist = () => {
    navigate('/gist', {state: {gist: localGist}});
  };
  

  return (
    <MainDiv onClick={() => list && openGist()}>
      <FileInfoArea>
        <GistUserInfo row={localGist}/>
        <GistOptions
          owner={localGist.owner}
          onEdit={e => onEdit(e)}
          onDelete={e => onDelete(e)}
          onStar={e => onStar(e)}
          onFork={e => onFork(e)}
        />
      </FileInfoArea>
      <Card sx={{ width: '75%', alignSelf: 'center'}}>
        <CardHeader title = {
            <CardTitleContainer>
              <CodeIcon sx={{marginRight: '10px'}}/>
              {gistFileURL(localGist).filename}
            </CardTitleContainer>
        }/>
        <CardContent sx={{
            height: gistProp? '30vh' : '70vh',
            borderTop: '1px solid lightgrey',
            paddingTop: '0px',
            paddingBottom: '0px'
        }}>
          {deleteGist.isPending && <CircularProgress />}
          <CodeView fileURI={gistFileURL(localGist).fileURI} />
        </CardContent>
        <Divider />
      </Card>
    </MainDiv>
  )
}

export default GistPage;