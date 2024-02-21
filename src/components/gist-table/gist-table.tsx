import {
  CircularProgress,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarIcon from '@mui/icons-material/Star';
import { format } from 'date-fns';
import { GistDataType } from '../../types';
import InContentAvatar from '../shared-components/in-content-avatar';
import { StyledTableCell } from './gist-table-styles';
import { themeColor, themeColorLight } from '../shared-components/app-theme';
import { LoaderArea } from '../shared-components/styled-main-view';
import { useNavigate } from 'react-router-dom';
import { StyledGistOptions, OptionContainer } from '../../pages/gist-page/gist-page-styles';
import { SyntheticEvent } from 'react';

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
  const navigate = useNavigate();

  const openGist = (gist: GistDataType) => {
    navigate('/gist', {state: {gist}});
  };

  const onStar = (e: SyntheticEvent) => {
    console.log(e);
  };
  
  const onFork = (e: SyntheticEvent) => {
    console.log(e);
  };

  if (loading || !data) return (
    <LoaderArea>
      <CircularProgress />
    </LoaderArea>
  );
  return (
    <TableContainer sx={{ width: '90vw', minHeight: '720px' }}>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow sx={{background: themeColorLight}}>
            {TableCols.map((col, index) => <StyledTableCell key={index}>{col}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody sx={{ height: '720px'}}>
          {data.map((row) => (
            <TableRow key={row.id} onClick={()=> openGist(row)}>
              <StyledTableCell component="th" scope="row">
                <InContentAvatar row={row} />
              </StyledTableCell>
              <StyledTableCell>{row.created_at && format(new Date(row.created_at), 'd MMM, yyyy')}</StyledTableCell>
              <StyledTableCell>{row.created_at && format(new Date(row.created_at), 'HH:mm a')}</StyledTableCell>
              <StyledTableCell>{row.files && Object.keys(row.files)[0]}</StyledTableCell>
              <StyledTableCell>
                <StyledGistOptions>
                <OptionContainer onClick={(e) => onStar(e)}><StarIcon sx={{color: themeColor}}/></OptionContainer>
                <OptionContainer onClick={(e) => onFork(e)}><ForkRightIcon sx={{color: themeColor}}/></OptionContainer>
              </StyledGistOptions>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default GistTable