import React, { useEffect, useState } from "react";

function ComicBookPulls() {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        fetch(`https://comic-book-pull-list.onrender.com/${window.location.pathname.slice(1)}`)
            .then(res => res.json())
            .then(comicList => {
                setComics(comicList)
            })
    }, [window.location.pathname])

    const title = comics.map(comic => <p key={comic.id}>{comic.title}</p>)

    return (
        <>
            <h1>{window.location.pathname.slice(1)}</h1>
            {title}
        </>
    )

}

export default ComicBookPulls;