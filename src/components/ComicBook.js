import React from "react";

function ComicBook({ comic }) {
    return (
        <tr>
            <td>{comic.title}</td>
            <td>{comic.type}</td>
            <td>{comic.releaseFrequency}</td>
            <td>{comic.genre}</td>
            <td>${comic.price}</td>
        </tr>
    )
}

export default ComicBook;