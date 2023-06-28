import React, { useState } from "react";
import Navbar from "./Navbar";

function NewComicBook() {

    return (
        <>
            <Navbar />
            <div className="form-container">
                <h1>Add New Comic Book</h1>
                <form className="comic-form">
                    <div className="form-item">
                        <label for="comic-title">Comic Book Title</label>
                        <input id="comic-title" />
                    </div>
                    <div className="form-item">
                        <label for="comic-type">Type</label>
                        <select id="comic-type">
                            <option disabled selected>Select</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Mini-Series">Mini-Series</option>
                            <option value="Maxi-Series">Maxi-Series</option>
                            <option value="One-Shot">One-Shot</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label for="comic-genre">Genre</label>
                        <input id="comic-genre" />
                    </div>
                    <div className="form-item">
                        <label for="comic-price">Price</label>
                        <input type="number" id="comic-price" />
                    </div>
                    <div className="form-item">
                        <button>Submit</button>
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