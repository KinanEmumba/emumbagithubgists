import { useContext, useState } from 'react';
import { CircularProgress } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useGetPublicGists } from '../../apis/apis';
import { ApiRespType } from '../../types';
import GistTable from '../../components/gist-table/gist-table';
import GistCards from '../../components/gist-cards/gist-cards';
import PaginationHandler from '../../components/shared-components/pagination-handler';
import { AuthContext } from '../../App';
import { StyledViewSelectionContainer, StyledVerticalDivider } from './homepage-styles';

const Homepage = () => {
  const contextValue = useContext(AuthContext);
  const loading = contextValue?.loading;
  const [page, setPage] = useState(1);
  const [tableView, setTableView] = useState(true);
  const {
    data,
    loading: apiLoading,
    error
  } : ApiRespType = useGetPublicGists({page});
  
  return (
    <>
      <PaginationHandler page={page} onPageChange={(_event, newPage) => setPage(newPage + 1)}/>
      <StyledViewSelectionContainer>
        <ListIcon
          color={tableView ? 'primary' : 'disabled'}
          fontSize='large'
          onClick={() => setTableView(true)}
        />
        <StyledVerticalDivider />
        <DashboardIcon
          color={!tableView ? 'primary' : 'disabled'}
          fontSize='large'
          onClick={() => setTableView(false)}
        />
      </StyledViewSelectionContainer>
      {apiLoading || loading? <CircularProgress /> :
        data ? 
          tableView ? <GistTable data={data} /> : <GistCards data={data} /> :
        error && error.message
      }
    </>
  )
}

export default Homepage;
