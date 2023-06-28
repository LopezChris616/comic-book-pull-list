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
            <NavLink to="/addComic">Add Comic Book</NavLink>
          </div>
        </div>
      );
}

export default Navbar;