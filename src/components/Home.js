import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <h1 style={{ color: "white" }}>C O M I C / B O O K / P U L L  / L I S T</h1>
            <NavLink to="/marvel">Marvel Comics</NavLink>

            <NavLink to="/dc">DC Comics</NavLink>

            <NavLink to="/image">Image Comics</NavLink>

            <NavLink to="/addComic">Add Comic Book</NavLink>
        </div>
    )
}

export default Home;