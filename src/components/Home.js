import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <h1 style={{ color: "white" }}>C O M I C / B O O K / P U L L  / L I S T</h1>
            <Link to="/marvel" className="comic-links">Marvel Comics</Link>

            <Link to="/dc" className="comic-links">DC Comics</Link>

            <Link to="/image" className="comic-links">Image Comics</Link>

            <Link to="/addComic" className="comic-links">Add Comic Book</Link>
        </div>
    )
}

export default Home;