import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ComicBook from "./ComicBook";

function ComicBookPulls({ comics, setComics }) {
    const headers = ["Title", "Type", "Released", "Genre", "Price"];
    const path = window.location.pathname; // Grab the current path to dynamically make the correct fetch request
    const loading = <h1>Getting Comic Data...</h1>; // Displays before the data from the fetch request renders to the page

    useEffect(() => {
        fetch(`https://comic-book-pull-list.onrender.com${path}`)
            .then(res => res.json())
            .then(comicList => setComics(comicList))
            .catch(err => console.error(err));
    }, [path])

    const tableHeaders = headers.map(header => <th key={ header }>{ header }</th>);
    const tableData = comics.map(comic => <ComicBook comic={ comic } key={ comic.id } />)

    return (
        <>
            <Navbar />
            <div className="comic-data">
                <h1>{ path.slice(1).toUpperCase() } COMICS</h1>
                {// Ternary operator to determine whether to display the loading variable or the comic data 
                    comics.length > 0 ?  
                        <table>
                            <thead>
                                <tr>
                                    { tableHeaders }
                                </tr>
                            </thead>
                            <tbody>
                                { tableData }
                            </tbody>
                        </table> : 
                        loading }
                </div>
        </>
    )
}

export default ComicBookPulls;