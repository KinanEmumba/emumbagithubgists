import { useContext, useState } from 'react';
import Header from '../components/Header';
import { Button, CircularProgress } from '@mui/material';
import { AuthContext } from '../App';
import { useGetPublicGists } from '../apis/apis';
import { ApiRespType } from '../types';

const Homepage = () => {
  const contextValue = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const {
    data,
    loading,
    error
  } : ApiRespType = useGetPublicGists({page});
  
  const pageChange = (next: boolean) => {
    setPage(prev => next ? prev + 1 : prev - 1)
  };
  
  return (
    <>
      <Header user={contextValue?.user}/>
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
