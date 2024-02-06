import { TablePagination } from '@mui/material'

const PaginationHandler = ({
  onPageChange,
  page,
  rowsPerPage = 10,
  rowsPerPageOptions = []
}: {
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void,
  page: number
  rowsPerPage?: number,
  rowsPerPageOptions?: []
}) => {
  return (
    <TablePagination
      count={-1}
      onPageChange={onPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
    />
  )
}

export default PaginationHandler;