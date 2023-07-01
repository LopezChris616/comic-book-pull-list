import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
          <div className="nav-home">
            <NavLink exact to="/" className="comic-links">Pull List</NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/marvel" className="comic-links">Marvel Comics</NavLink>
            <NavLink to="/dc" className="comic-links">DC Comics</NavLink>
            <NavLink to="/image" className="comic-links">Image Comics</NavLink>
            <NavLink to="/addComic" className="comic-links">Add Comic Book</NavLink>
          </div>
        </div>
      );
}

export default Navbar;