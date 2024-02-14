import { Paper, TableContainer } from '@mui/material';
import { GistDataType } from '../../types';
import './gist-cards.css';
import GistSingleCard from './gist-single-card';

const GistCards = ({
  data,
}: {
  data: null | GistDataType[],
}) => {
  return (
    <TableContainer
      component={Paper} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }}>
      <div className={'innerContainer'}>
        {data?.map(row => <GistSingleCard key={row.id} row={row} />)}
      </div>
    </TableContainer>
  );
}

export default GistCards;