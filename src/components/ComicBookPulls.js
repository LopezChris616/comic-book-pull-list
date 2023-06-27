import React, { useEffect, useState } from "react";
import ComicBook from "./ComicBook";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';

function ComicBookPulls() {
    const [comics, setComics] = useState([]);
    const headers = ["Title", "Type", "Genre", "Price"];
    const path = window.location.pathname;

    const tableStyle = {
        color: "white"
    };

    useEffect(() => {
        fetch(`https://comic-book-pull-list.onrender.com${path}`)
            .then(res => res.json())
            .then(comicList => setComics(comicList))
    }, [path])

    console.log(comics);

    

    const tableHeaders = headers.map(header => <TableCell align="center" sx={ tableStyle } key={ header }>{ header }</TableCell>);

    const tableData = comics.map(comic => <ComicBook comic={ comic } tableStyle={ tableStyle } key={ comic.id } />)

    return (
        <>
            <h1 style={{color: "white", textAlign: "center"}}>{window.location.pathname.slice(1).toUpperCase()}</h1>
            <Grid container>
                <TableContainer sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Table sx={{ maxWidth: 700 }}>
                        <TableHead>
                            <TableRow>
                                { tableHeaders }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { tableData }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}

export default ComicBookPulls;