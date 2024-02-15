import { CircularProgress, Paper, TableContainer } from '@mui/material';
import { GistDataType } from '../../types';
import GistSingleCard from './gist-single-card';
import { InnerContainer } from './gist-cards-styles';

const GistCards = ({
  data,
  loading,
}: {
  data: null | GistDataType[],
  loading?: boolean,
}) => {
  return (
    <TableContainer
      component={Paper} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }}>
      <InnerContainer>
        {loading ? <CircularProgress /> :
        data?.map(row => <GistSingleCard key={row.id} row={row} />)}
      </InnerContainer>
    </TableContainer>
  );
}

export default GistCards;