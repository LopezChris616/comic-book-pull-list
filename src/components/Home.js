import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <h1 style={{color: "white"}}>C O M I C / B O O K / P U L L  / L I S T</h1>
                <ButtonGroup size="large" aria-label="large button group" color="info">
                    <NavLink to="/marvel">
                        <Button>Marvel Comics</Button>
                    </NavLink>
                    <NavLink to="/dc">
                        <Button>DC Comics</Button>
                    </NavLink>
                    <NavLink to="/image">
                        <Button>Image Comics</Button>
                    </NavLink>
                    <NavLink to="/addComic">
                        <Button>Add Comic Book</Button>
                    </NavLink>
                </ButtonGroup>
            </Grid>
        </>
    )
}

export default Home;