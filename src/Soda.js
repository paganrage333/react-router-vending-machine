import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css"

const Soda = () => {
    return (
        <div className="Soda">
            <div className="message">
                <h1>You got a soda!</h1>
                <p>Nothing better than a refreshing can on a hot summer day</p>
                <p> <Link to="/">Back Home</Link> </p>
            </div>
            
        </div>
    )
}

export default Soda;