import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ComicBook from "./ComicBook";

function ComicBookPulls({ comics, setComics }) {
    const headers = ["Title", "Type", "Released", "Genre", "Price"];
    const path = window.location.pathname;
    const loading = <h1>Getting Comic Data...</h1>;

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
                { comics.length > 0 ?  <table>
                    <thead>
                        <tr>
                            { tableHeaders }
                        </tr>
                    </thead>
                    <tbody>
                        { tableData }
                    </tbody>
                </table> : loading }
            </div>
        </>
    )
}

export default ComicBookPulls;