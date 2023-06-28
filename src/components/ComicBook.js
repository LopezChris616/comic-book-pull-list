import React from "react";

function ComicBook({ comic, tableStyle }) {

    return (
        <h1>Comic Books</h1>
    )

    // return (
    //     <TableRow>
    //         <TableCell align="center" sx={tableStyle}>{comic.title}</TableCell>
    //         <TableCell align="center" sx={tableStyle}>{comic.type}</TableCell>
    //         <TableCell align="center" sx={tableStyle}>{comic.genre}</TableCell>
    //         <TableCell align="center" sx={tableStyle}>{comic.price}</TableCell>
    //     </TableRow>
    // )
}

export default ComicBook;