import React, { useState } from "react";

function NewComicBook() {
    const inputStyle = {
        borderColor: "red"
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center" sx={{height: "100vh"}}>
                <Grid item>
                    <Typography variant="h2">FORM</Typography>
                </Grid>
                <form>
                    <FormControl>
                        <Grid item>
                            <TextField label="Title" variant="outlined" sx={ inputStyle } className="form-input" />
                        </Grid>

                        <Grid item>
                            <TextField label="Type" variant="outlined" sx={ inputStyle } select className="form-input">
                                <MenuItem value="Ongoing">Ongoing</MenuItem>
                                <MenuItem value="Mini-Series">Mini-Series</MenuItem>
                                <MenuItem value="Maxi-Series">Maxi-Series</MenuItem>
                                <MenuItem value="One-Shot">One-Shot</MenuItem>
                            </TextField>    
                        </Grid>

                        <Grid item>
                            <TextField label="Genre" variant="outlined" sx={ inputStyle } className="form-input" />                           
                        </Grid>

                        <Grid item>
                            <TextField label="Price" variant="outlined" sx={ inputStyle } className="form-input" />
                        </Grid>

                        <Grid item>
                            <TextField label="Frequency" variant="outlined" sx={ inputStyle } className="form-input" select>
                                <MenuItem value="Monthly">Monthly</MenuItem>
                                <MenuItem value="Bi-Weekly">Bi-Weekly</MenuItem>
                                <MenuItem value="Weekly">Weekly</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item>
                            <Button size="large" variant="outlined">Add</Button>
                        </Grid>
                    </FormControl>
                </form>
            </Grid>
        </>
    )
}

export default NewComicBook;