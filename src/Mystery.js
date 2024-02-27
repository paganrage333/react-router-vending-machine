import React from "react";
import { Link } from "react-router-dom";
import "./Mystery.css"
import "./AllVendingItems.css"

const Mystery = () => {
    return (
        <div className="Mystery">
            <div className="message">
                <h1>You got a ???</h1>
                <p>What is this thing...</p>
                <p> <Link to="/">Back Home</Link> </p>
            </div>
        </div>
    )
}

export default Mystery;