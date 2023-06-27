import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function NewComicBook() {
    const inputStyle = {
        borderColor: "red"
    };

    return (
        <>
            <Typography variant="h2">FORM</Typography>
            <form>
                <FormControl>
                    <TextField label="Title" variant="outlined" sx={ inputStyle } className="form-input" />
                    <TextField label="Type" variant="outlined" sx={ inputStyle } select className="form-input">
                        <MenuItem value="Ongoing">Ongoing</MenuItem>
                        <MenuItem value="Mini-Series">Mini-Series</MenuItem>
                        <MenuItem value="Maxi-Series">Maxi-Series</MenuItem>
                        <MenuItem value="One-Shot">One-Shot</MenuItem>
                    </TextField>
                    <TextField label="Genre" variant="outlined" sx={ inputStyle } className="form-input" />
                    <TextField label="Price" variant="outlined" sx={ inputStyle } className="form-input" />
                    <TextField label="Frequency" variant="outlined" sx={ inputStyle } className="form-input" select>
                        <MenuItem value="Monthly">Monthly</MenuItem>
                        <MenuItem value="Bi-Weekly">Bi-Weekly</MenuItem>
                        <MenuItem value="Weekly">Weekly</MenuItem>
                    </TextField>
                    <Button size="large" variant="outlined">Add</Button>
                </FormControl>
            </form>
        </>
    )
}

export default NewComicBook;