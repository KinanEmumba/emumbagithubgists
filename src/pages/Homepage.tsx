import { useContext, useState } from 'react';
import { apiRespType } from '../apis/apiHook';
import Header from '../components/Header';
import { Button, CircularProgress } from '@mui/material';
import { AuthContext } from '../App';
import { useGetPublicGists } from '../apis/apis';

const Homepage = () => {
  const userToken = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const {
    data,
    loading,
    error
  } : apiRespType = useGetPublicGists({page});

  const pageChange = (next: boolean) => {
    setPage(prev => next ? prev + 1 : prev - 1)
  };

  return (
    <>
      <Header userToken={userToken}/>
      <div className={'innerView'}>
        <h1>Page number {page}</h1>
        <Button variant="contained" onClick={() => pageChange(false)} disabled={page === 1}>
          Previous Page
        </Button>
        <Button variant="contained" onClick={() => pageChange(true)}>
          Next Page
        </Button>
        {loading? <CircularProgress /> : <div>
          hi
          {error && error.message}
          {data && JSON.stringify(data)}
          </div>
        }
      </div>
    </>
  )
}

export default Homepage;
