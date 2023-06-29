import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ComicBook from "./ComicBook";

function ComicBookPulls({ comics, setComics }) {
    const headers = ["Title", "Type", "Released", "Genre", "Price"];
    const path = window.location.pathname;

    useEffect(() => {
        fetch(`https://comic-book-pull-list.onrender.com${path}`)
            .then(res => res.json())
            .then(comicList => setComics(comicList))
            .catch(err => console.error(err));
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
}

export default ComicBookPulls;