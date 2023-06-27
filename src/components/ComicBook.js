import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ComicBook({ comic, tableStyle }) {

    return (
        <TableRow>
            <TableCell align="center" sx={tableStyle}>{comic.title}</TableCell>
            <TableCell align="center" sx={tableStyle}>{comic.type}</TableCell>
            <TableCell align="center" sx={tableStyle}>{comic.genre}</TableCell>
            <TableCell align="center" sx={tableStyle}>{comic.price}</TableCell>
        </TableRow>
    )
}

export default ComicBook;