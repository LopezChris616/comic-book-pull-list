import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <h1 style={{ color: "white" }}>C O M I C / B O O K / P U L L  / L I S T</h1>
            <NavLink to="/marvel" className="comic-links">Marvel Comics</NavLink>

            <NavLink to="/dc" className="comic-links">DC Comics</NavLink>

            <NavLink to="/image" className="comic-links">Image Comics</NavLink>

            <NavLink to="/addComic" className="comic-links">Add Comic Book</NavLink>
        </div>
    )
}

export default Home;