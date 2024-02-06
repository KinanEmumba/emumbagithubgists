import {
  Avatar,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow
} from '@mui/material'
import { format } from 'date-fns';
import { GistDataType } from '../types';
import './GistTable.css';
import { Dispatch, SetStateAction } from 'react';
import PaginationHandler from './PaginationHandler';

const GistTable = ({
  data,
  page,
  setPage
}: {
  page: number,
  data: null | GistDataType[],
  setPage: Dispatch<SetStateAction<number>>,
}) => {

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const tableAvatarSection = (row: GistDataType) => {
    return (
      <div className='avatarContainer'>
        <Avatar className={'avatar'} src={row?.owner?.avatar_url} />
        {row.owner?.login}
      </div>
    );
  }

  if (!data || !data.length) return <CircularProgress />;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <PaginationHandler page={page} onPageChange={handleChangePage}/>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Owner ID</TableCell>
            <TableCell>First File Name</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {tableAvatarSection(row)}
              </TableCell>
              <TableCell>{row.created_at && format(new Date(row.created_at), 'd MMMM, yyyy')}</TableCell>
              <TableCell>{row.created_at && format(new Date(row.created_at), 'HH:mm:ss a')}</TableCell>
              <TableCell>{row.owner?.id}</TableCell>
              <TableCell>{row.files && Object.keys(row.files)[0]}</TableCell>
              <TableCell>{row.owner?.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <PaginationHandler page={page} onPageChange={handleChangePage}/>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default GistTable