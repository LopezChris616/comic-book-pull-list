import React, { useState } from "react";
import Navbar from "./Navbar";

function NewComicBook({ comics, setComics }) {
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
        fetch(`https://comic-book-pull-list.onrender.com/${newComic.publisher}`, {
            method: "POST",
            headers: {
                "Content-Type": "applicaiton/json"
            },
            body: JSON.stringify({
                title: newComic.title,
                type: newComic.type,
                genre: newComic.genre,
                price: newComic.price
            })
                .then(res => res.json())
                .then(comic => console.log(comic))
        });
    }

    return (
        <>
            <Navbar />
            <div className="form-container">
                <h1>Add New Comic Book</h1>
                <form className="comic-form">
                    <div className="form-item">
                        <label htmlFor="comic-title">Comic Book Title </label>
                        <input id="comic-title" name="title" value={ newComic.title } onChange={ handleChange } />
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-type">Type </label>
                        <select id="comic-type" name="type" value={ newComic.type } onChange={ handleChange }>
                            <option disabled>Select</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Mini-Series">Mini-Series</option>
                            <option value="Maxi-Series">Maxi-Series</option>
                            <option value="One-Shot">One-Shot</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-release">Release Schedule </label>
                        <select id="comic-release" name="releaseFrequency" value={ newComic.releaseFrequency } onChange={ handleChange }>
                            <option disabled>Select</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label htmlFor="comic-publisher">Publisher </label>
                        <select id="comic-publisher" name="publisher" value={ newComic.publisher } onChange={ handleChange }>
                            <option disabled>Select</option>
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
                        <button onSubmit={ handleNewComic }>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )

    // return (
    //     <>
    //         <Grid container direction="column" justifyContent="center" alignItems="center" sx={{height: "100vh"}}>
    //             <Grid item>
    //                 <Typography variant="h2">FORM</Typography>
    //             </Grid>
    //             <form>
    //                 <FormControl>
    //                     <Grid item>
    //                         <TextField label="Title" variant="outlined" sx={ inputStyle } className="form-input" />
    //                     </Grid>

    //                     <Grid item>
    //                         <TextField label="Type" variant="outlined" sx={ inputStyle } select className="form-input">
    //                             <MenuItem value="Ongoing">Ongoing</MenuItem>
    //                             <MenuItem value="Mini-Series">Mini-Series</MenuItem>
    //                             <MenuItem value="Maxi-Series">Maxi-Series</MenuItem>
    //                             <MenuItem value="One-Shot">One-Shot</MenuItem>
    //                         </TextField>    
    //                     </Grid>

    //                     <Grid item>
    //                         <TextField label="Genre" variant="outlined" sx={ inputStyle } className="form-input" />                           
    //                     </Grid>

    //                     <Grid item>
    //                         <TextField label="Price" variant="outlined" sx={ inputStyle } className="form-input" />
    //                     </Grid>

    //                     <Grid item>
    //                         <TextField label="Frequency" variant="outlined" sx={ inputStyle } className="form-input" select>
    //                             <MenuItem value="Monthly">Monthly</MenuItem>
    //                             <MenuItem value="Bi-Weekly">Bi-Weekly</MenuItem>
    //                             <MenuItem value="Weekly">Weekly</MenuItem>
    //                         </TextField>
    //                     </Grid>
    //                     <Grid item>
    //                         <Button size="large" variant="outlined">Add</Button>
    //                     </Grid>
    //                 </FormControl>
    //             </form>
    //         </Grid>
    //     </>
    // )
}

export default NewComicBook;