import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: "#F3F4F6",
    color: "#1F0084",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    background: "#fff", // Ensure body cells are white
    color: "#1F0084",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
export default function CustomTable({ columns, rows }) {
  return (
    <TableContainer
      sx={{
        maxHeight: 500,
        overflow: "auto",
        header: { position: "sticky", top: 0 },
      }}
      component={Paper}
    >
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.map((column) => (
                <StyledTableCell key={column.id}>
                  {row[column.id]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
