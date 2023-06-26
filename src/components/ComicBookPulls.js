import React, { useEffect, useState } from "react";
import ComicBook from "./ComicBook";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ComicBookPulls() {
    const [comics, setComics] = useState([]);
    const headers = ["Title", "Type", "Genre", "Price"];

    useEffect(() => {
        fetch(`https://comic-book-pull-list.onrender.com${window.location.pathname}`)
            .then(res => res.json())
            .then(comicList => setComics(comicList))
    }, [window.location.pathname])

    console.log(comics);

    

    const tableHeaders = headers.map(header => <TableCell align="right" key={header}>{header}</TableCell>);

    return (
        <>
            <h1>{window.location.pathname.slice(1)}</h1>
            <TableContainer>
                <Table sx={{minWidth: 700}}>
                    <TableHead>
                        <TableRow>
                            {tableHeaders}
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </>
    )

}

export default ComicBookPulls;