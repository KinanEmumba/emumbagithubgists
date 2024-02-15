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
import { StyledViewSelectionContainer, StyledVerticalDivider, StyledTableContainer } from './homepage-styles';

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
      <StyledViewSelectionContainer>
        <ListIcon
          color={tableView ? 'primary' : 'disabled'}
          fontSize='large'
          onClick={() => setTableView(true)}
        />
        <StyledVerticalDivider />
        <DashboardIcon
          color={!tableView ? 'primary' : 'disabled'}
          fontSize='medium'
          onClick={() => setTableView(false)}
        />
      </StyledViewSelectionContainer>
      <StyledTableContainer>
        {apiLoading || loading? <CircularProgress /> :
          data ? 
          tableView ? <GistTable data={data} /> : <GistCards data={data} /> :
          error && error.message
        }
      </StyledTableContainer>
      <PaginationHandler page={page} onPageChange={(newPage) => setPage(newPage)}/>
    </>
  )
}

export default Homepage;
