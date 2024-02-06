import { useState } from 'react';
import Header from '../components/Header';
import { CircularProgress } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useGetPublicGists } from '../apis/apis';
import { ApiRespType } from '../types';
import GistTable from '../components/GistTable';
import GistCards from '../components/GistCards';

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
      <Header loading={loading}/>
      <div className={'innerView'}>
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
            tableView ?
              <GistTable data={data} page={page} setPage={setPage}/> : 
              <GistCards data={data} page={page} setPage={setPage}/> :
          error && error.message
        }
      </div>
    </>
  )
}

export default Homepage;
