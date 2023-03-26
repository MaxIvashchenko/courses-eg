import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow
} from '@mui/material';
import { TableHead } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { IconComponent } from '@src/components';
import { paths } from '@src/constants';
import { IUserDetails } from '@src/types';

import { TablePaginationActions } from '../TablePaginationActions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

interface UsersTableProps {
  list: IUserDetails[];
}

const UsersTable = ({ list }: UsersTableProps) => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

  const handleChangePage = (
    // @ts-ignore
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toUserInfoPage = (id: string) => () =>
    router.push(`${paths.admin}/${id}`);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label='custom pagination table'>
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Имя</StyledTableCell>
            <StyledTableCell>Почта</StyledTableCell>
            <StyledTableCell align='center'>Тип</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : list
          ).map((row) => (
            <TableRow key={row.email}>
              <TableCell>
                {row.image ? (
                  <Image
                    style={{ borderRadius: '50%' }}
                    src={row.image}
                    width={50}
                    height={50}
                    alt='avatar'
                  />
                ) : (
                  <IconComponent name='user' width={30} height={30} />
                )}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align='center'>{row.role}</TableCell>
              <TableCell>
                <IconButton onClick={toUserInfoPage(row.id)}>
                  <IconComponent name='settings' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        {list.length > 5 && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={list.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
