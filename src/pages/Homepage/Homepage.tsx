import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useGetPublicGists } from '../../apis/apis';
import { ApiRespType } from '../../types';
import GistTable from '../../components/GistTable/GistTable';
import GistCards from '../../components/GistCards/GistCards';
import PaginationHandler from '../../components/PaginationHandler';
import Header from '../../components/Header/Header';
import './Homepage.css';


const Homepage = () => {
  const [page, setPage] = useState(1);
  const [tableView, setTableView] = useState(true);
  const {
    data,
    loading,
    error
  } : ApiRespType = useGetPublicGists({page});
  
  return (
    <>
      <Header/>
      <div className={'innerView'}>
        <PaginationHandler page={page} onPageChange={(_event, newPage) => setPage(newPage + 1)}/>
        <div className={'viewSelectionContainer'}>
          <ListIcon
            color={tableView ? 'primary' : 'disabled'}
            fontSize='large'
            onClick={() => setTableView(true)}
          />
          <div className={'verticalDivider'} />
          <DashboardIcon
            color={!tableView ? 'primary' : 'disabled'}
            fontSize='large'
            onClick={() => setTableView(false)}
          />
        </div>
        {loading? <CircularProgress /> :
          data ? 
            tableView ? <GistTable data={data} /> : <GistCards data={data} /> :
          error && error.message
        }
      </div>
    </>
  )
}

export default Homepage;
