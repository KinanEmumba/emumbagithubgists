import { TablePagination } from '@mui/material'
import { pageSize } from '../constURLs';

export type TablePaginationOnPageCgangeType = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;

const PaginationHandler = ({
  onPageChange,
  page,
  rowsPerPage = pageSize,
  rowsPerPageOptions = []
}: {
  onPageChange: TablePaginationOnPageCgangeType,
  page: number
  rowsPerPage?: number,
  rowsPerPageOptions?: []
}) => {
  return (
    <TablePagination
      count={-1}
      onPageChange={onPageChange}
      page={page-1}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
    />
  )
}

export default PaginationHandler;