import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";

function NewComicBook({ addComic }) {
    const [redirectPath, setRedirectPath] = useState(null);
    const [newComic, setNewComic] = useState({
        title: "",
        type: "",
        releaseFrequency: "",
        genre: "",
        price: "",
        publisher: ""
    });

    function handleChange(event) {
        setNewComic({
            ...newComic,
            [event.target.name]: event.target.value
        });
    }

    function handleNewComic(event) {
        event.preventDefault();
        const { publisher } = newComic;
        fetch(`https://comic-book-pull-list.onrender.com/${newComic.publisher}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newComic.title,
                type: newComic.type,
                releaseFrequency: newComic.releaseFrequency,
                genre: newComic.genre,
                price: newComic.price
            })
        })
            .then(res => res.json())
            .then(newComic => {
                addComic(newComic);
                setRedirectPath(`/${publisher}`);
            })
            .catch(err => console.error(err));

    }

    if(redirectPath) {
        return <Redirect to={ redirectPath } />;
    }


    return (
        <>
            <Navbar />
            <div className="form-container">
                <h1>Add New Comic Book</h1>
                <form className="comic-form" onSubmit={ handleNewComic }>
                    <div className="form-item">
                        <label htmlFor="comic-title">Comic Book Title </label>
                        <input id="comic-title" name="title" value={ newComic.title } onChange={ handleChange } />
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-type">Type </label>
                        <select id="comic-type" name="type" value={ newComic.type } onChange={ handleChange }>
                            <option>Select</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Mini-Series">Mini-Series</option>
                            <option value="Maxi-Series">Maxi-Series</option>
                            <option value="One-Shot">One-Shot</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-release">Release Schedule </label>
                        <select id="comic-release" name="releaseFrequency" value={ newComic.releaseFrequency } onChange={ handleChange }>
                            <option>Select</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-publisher">Publisher </label>
                        <select id="comic-publisher" name="publisher" value={ newComic.publisher } onChange={ handleChange }>
                            <option>Select</option>
                            <option value="marvel">Marvel Comics</option>
                            <option value="dc">DC Comics</option>
                            <option value="image">Image Comics</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-genre">Genre </label>
                        <input id="comic-genre" name="genre" value={ newComic.genre } onChange={ handleChange } />
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-price">Price </label>
                        <input type="number" id="comic-price" name="price" value={ newComic.price } onChange={ handleChange } />
                    </div>
                    <div className="form-item">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewComicBook;