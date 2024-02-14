import {TableCell, styled} from '@mui/material';
import { themeColor } from '../shared-components/app-theme';

export const StyledTableCell = styled(TableCell)(() => `
  padding: 10px;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid ${themeColor};
`);
