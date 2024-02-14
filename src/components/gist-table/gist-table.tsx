import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { format } from 'date-fns';
import { GistDataType } from '../../types';
import './gist-table.css';
import InContentAvatarSection from '../shared-components/in-content-avatar';

const TableCols = [
  'Name',
  'Date',
  'Time',
  'Owner ID',
  'First File Name',
  ''
];

const GistTable = ({
  data,
}: {
  data: null | GistDataType[],
}) => {

  if (!data || !data.length) return <CircularProgress />;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {TableCols.map((col, index) => <TableCell key={index}>{col}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <InContentAvatarSection row={row} />
              </TableCell>
              <TableCell>{row.created_at && format(new Date(row.created_at), 'd MMM, yyyy')}</TableCell>
              <TableCell>{row.created_at && format(new Date(row.created_at), 'HH:mm a')}</TableCell>
              <TableCell>{row.owner?.id}</TableCell>
              <TableCell>{row.files && Object.keys(row.files)[0]}</TableCell>
              <TableCell>{row.owner?.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GistTable