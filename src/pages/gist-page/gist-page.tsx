import { useLocation } from 'react-router-dom';
import { FileInfoArea, MainDiv } from './gist-page-styles';
import GistUserInfo from '../../components/shared-components/gist-user-info';

const GistPage = () => {
  const location = useLocation();
  const {gist} = location.state;

  return (
    <MainDiv>
      <FileInfoArea>
        <GistUserInfo row={gist}/>
      </FileInfoArea>
    </MainDiv>
  )
}

export default GistPage;