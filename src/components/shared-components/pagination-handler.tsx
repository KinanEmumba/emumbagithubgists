import { TablePagination } from '@mui/material'
import { pageSize } from '../../const-urls';

export type TablePaginationOnPageChangeType = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;

const PaginationHandler = ({
  onPageChange,
  page,
  rowsPerPage = pageSize,
  rowsPerPageOptions = []
}: {
  onPageChange: TablePaginationOnPageChangeType,
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