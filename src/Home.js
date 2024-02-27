import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

import "./AllVendingItems.css"

const Home = () => {
    return (
        <div className="Home">
            <div className="message">
                <h1>WHAT WILL YOU HAVE?</h1>
                <Link to="/soda">Soda</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/mystery">Mystery</Link> 
            </div>
        </div>
    )
}

export default Home;