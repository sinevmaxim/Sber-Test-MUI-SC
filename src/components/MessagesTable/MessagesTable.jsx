import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const MessagesTable = ({ messages }) => {
  return (
    <Table
      sx={{
        maxWidth: 800,
        margin: "0 auto 50px auto",
        backgroundColor: "white",
        padding: "4rem",
        borderRadius: " 16px",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>Сообщение</TableCell>
          <TableCell align="right">Имя</TableCell>
          <TableCell align="right">Фамилия</TableCell>
          <TableCell align="right">Email адрес</TableCell>
          <TableCell align="right">Телефон</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* В рамках данного решения, для простоты, используем index как значение key */}
        {messages.map((message, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {message.message}
            </TableCell>
            <TableCell align="right">{message.name}</TableCell>
            <TableCell align="right">{message.lastName}</TableCell>
            <TableCell align="right">{message.email}</TableCell>
            <TableCell align="right">{message.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MessagesTable;
