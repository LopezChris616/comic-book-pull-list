import React from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

function Home() {
    return (
        <>
            <h1>Comic Book Pull List</h1>
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
            </ButtonGroup>
        </>
    )
}

export default Home;