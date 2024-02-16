import {
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { format } from 'date-fns';
import { GistDataType } from '../../types';
import InContentAvatar from '../shared-components/in-content-avatar';
import { StyledTableCell } from './gist-table-styles';
import { themeColorLight } from '../shared-components/app-theme';
import { LoaderArea } from '../shared-components/styled-main-view';

const TableCols = [
  'Name',
  'Date',
  'Time',
  'First File Name',
  ''
];

const GistTable = ({
  data,
  loading,
}: {
  data: undefined | GistDataType[],
  loading?: boolean,
}) => {

  if (loading || !data) return (
    <LoaderArea>
      <CircularProgress />
    </LoaderArea>
  );
  return (
    <TableContainer sx={{ width: '90vw',minHeight: '720px' }}>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow sx={{background: themeColorLight}}>
            {TableCols.map((col, index) => <StyledTableCell key={index}>{col}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody sx={{ height: '720px'}}>
          {data.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <InContentAvatar row={row} />
              </StyledTableCell>
              <StyledTableCell>{row.created_at && format(new Date(row.created_at), 'd MMM, yyyy')}</StyledTableCell>
              <StyledTableCell>{row.created_at && format(new Date(row.created_at), 'HH:mm a')}</StyledTableCell>
              <StyledTableCell>{row.files && Object.keys(row.files)[0]}</StyledTableCell>
              <StyledTableCell>{' '}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GistTable