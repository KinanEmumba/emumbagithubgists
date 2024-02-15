import { Card, CircularProgress, TableContainer } from '@mui/material';
import { GistDataType } from '../../types';
import GistSingleCard from './gist-single-card';
import { InnerContainer } from './gist-cards-styles';
import { LoaderArea } from '../shared-components/styled-main-view';

const GistCards = ({
  data,
  loading,
}: {
  data: null | GistDataType[],
  loading?: boolean,
}) => {
  if (loading || !data || !data.length) return (
    <LoaderArea>
      <CircularProgress />
    </LoaderArea>
  );
  return (
    <TableContainer
      component={Card}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        boxShadow: 'none'
    }}>
      <InnerContainer>
        {data?.map(row => <GistSingleCard key={row.id} row={row} />)}
      </InnerContainer>
    </TableContainer>
  );
}

export default GistCards;