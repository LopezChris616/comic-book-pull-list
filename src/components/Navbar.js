import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="info">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <NavLink exact to="/">
                            <Button sx={{ color: "white" }} size="large">Pull List</Button>
                        </NavLink>
                    </Typography>
                    <NavLink to="/marvel">
                        <Button sx={{ color: "white" }}>Marvel Comics</Button>
                    </NavLink>
                    <NavLink to="/dc">
                        <Button sx={{ color: "white" }}>DC Comics</Button>
                    </NavLink>
                    <NavLink to="/image">
                        <Button sx={{ color: "white" }}>Image Comics</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;