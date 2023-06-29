import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ComicBook from "./ComicBook";

function ComicBookPulls({ comics, setComics }) {
    const headers = ["Title", "Type", "Genre", "Price"];
    const path = window.location.pathname;

    useEffect(() => {
        fetch(`https://comic-book-pull-list.onrender.com${path}`)
            .then(res => res.json())
            .then(comicList => setComics(comicList))
    }, [path])

    console.log(comics);

    const tableHeaders = headers.map(header => <th key={ header }>{ header }</th>);
    const tableData = comics.map(comic => <ComicBook comic={ comic } key={ comic.id } />)

    return (
        <>
            <Navbar />
            <div className="comic-data">
                <h1>{ path.slice(1).toUpperCase() } COMICS</h1>
                <table>
                    <thead>
                        <tr>
                            { tableHeaders }
                        </tr>
                    </thead>
                    <tbody>
                        { tableData }
                    </tbody>
                </table>
            </div>
        </>
    )

    // 

    // const tableData = comics.map(comic => <ComicBook comic={ comic } tableStyle={ tableStyle } key={ comic.id } />)

    // return (
    //     <>
    //         <h1 style={{color: "white", textAlign: "center"}}>{window.location.pathname.slice(1).toUpperCase()}</h1>
    //         <Grid container>
    //             <TableContainer sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    //                 <Table sx={{ maxWidth: 700 }}>
    //                     <TableHead>
    //                         <TableRow>
    //                             { tableHeaders }
    //                         </TableRow>
    //                     </TableHead>
    //                     <TableBody>
    //                         { tableData }
    //                     </TableBody>
    //                 </Table>
    //             </TableContainer>
    //         </Grid>
    //     </>
    // )
}

export default ComicBookPulls;