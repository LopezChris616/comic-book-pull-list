import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    borderBottom: "1px solid white"
  };

    return (
        <div className="navbar">
          <div className="nav-home">
            <NavLink exact to="/" className="comic-links">Pull List</NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/marvel" exact activeStyle={ linkStyle } className="comic-links">Marvel Comics</NavLink>
            <NavLink to="/dc" exact activeStyle={ linkStyle } className="comic-links">DC Comics</NavLink>
            <NavLink to="/image" exact activeStyle={ linkStyle } className="comic-links">Image Comics</NavLink>
            <NavLink to="/addComic" exact activeStyle={ linkStyle } className="comic-links">Add Comic Book</NavLink>
          </div>
        </div>
      );
}

export default Navbar;