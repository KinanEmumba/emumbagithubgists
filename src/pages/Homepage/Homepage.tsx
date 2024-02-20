import { useContext, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useGetPublicGists } from '../../apis/apis';
import GistTable from '../../components/gist-table/gist-table';
import GistCards from '../../components/gist-cards/gist-cards';
import PaginationHandler from './pagination-handler';
import { AuthContext } from '../../App';
import { StyledViewSelectionContainer, StyledVerticalDivider, StyledTableContainer, ErrorMessage } from './homepage-styles';
import { UseQueryResult } from '@tanstack/react-query';
import { GistDataType } from '../../types';

const Homepage = () => {
  const contextValue = useContext(AuthContext);
  const loading = contextValue?.loading;
  const [page, setPage] = useState(1);
  const [tableView, setTableView] = useState(true);
  const {
    data,
    isLoading: apiLoading,
    error,
  } : UseQueryResult<GistDataType[], Error> = useGetPublicGists({page});
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
        {error?.message && <ErrorMessage>{error.message}</ErrorMessage> || 
          tableView ?
            <GistTable data={data} loading={apiLoading || loading} /> :
            <GistCards data={data} loading={apiLoading || loading}/>
        }
      </StyledTableContainer>
      <PaginationHandler page={page} onPageChange={(newPage) => setPage(newPage)}/>
    </>
  )
}

export default Homepage;
