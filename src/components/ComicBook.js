import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ComicBook({ comic }) {
    return (
        <TableRow>
            <TableCell align="right">{comic.title}</TableCell>
            <TableCell align="right">{comic.type}</TableCell>
            <TableCell align="right">{comic.genre}</TableCell>
            <TableCell align="right">{comic.price}</TableCell>
        </TableRow>
    )
}

export default ComicBook;