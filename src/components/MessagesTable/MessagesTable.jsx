import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

const StyledTable = styled(Table)({
    maxWidth: 800,
    margin: "0 auto 50px auto",
    backgroundColor: "white",
    borderRadius: "16px",
});

const StyledTableRow = styled(TableRow)({
    "&:last-child td, &:last-child th": { border: 0 },
});

const MessagesTable = ({ messages, header }) => {
    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    {header.map((headerEl, index) => {
                        return (
                            <TableCell
                                align={`${index === 0 ? "left" : "right"}`}
                            >
                                {headerEl}
                            </TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {/* В рамках данного решения, для простоты, используем index как значение key */}
                {messages.map((message, index) => (
                    <StyledTableRow key={index}>
                        <TableCell component="th" scope="row">
                            {message.message}
                        </TableCell>
                        <TableCell align="right">{message.name}</TableCell>
                        <TableCell align="right">{message.lastName}</TableCell>
                        <TableCell align="right">{message.email}</TableCell>
                        <TableCell align="right">{message.phone}</TableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default MessagesTable;
