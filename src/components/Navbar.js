import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
          <div className="nav-home">
            <NavLink exact to="/">Pull List</NavLink>
          </div>
          <div class="nav-links">
            <NavLink to="/marvel">Marvel Comics</NavLink>
            <NavLink to="/dc">DC Comics</NavLink>
            <NavLink to="/image">Image Comics</NavLink>
          </div>
        </div>
      );
    // return (
    //     <Box sx={{ flexGrow: 1 }}>
    //         <AppBar position="static" color="info">
    //             <Toolbar>
    //                 <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //                     <NavLink exact to="/">
    //                         <Button sx={{ color: "white" }} size="large">Pull List</Button>
    //                     </NavLink>
    //                 </Typography>
    //                 <NavLink to="/marvel">
    //                     <Button sx={{ color: "white" }}>Marvel Comics</Button>
    //                 </NavLink>
    //                 <NavLink to="/dc">
    //                     <Button sx={{ color: "white" }}>DC Comics</Button>
    //                 </NavLink>
    //                 <NavLink to="/image">
    //                     <Button sx={{ color: "white" }}>Image Comics</Button>
    //                 </NavLink>
    //                 <NavLink to="/addComic">
    //                     <Button sx={{ color: "white" }}>Add Comic Book</Button>
    //                 </NavLink>
    //             </Toolbar>
    //         </AppBar>
    //     </Box>
    // )
}

export default Navbar;