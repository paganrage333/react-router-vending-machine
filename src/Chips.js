import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css"
import "./AllVendingItems.css"

const Chips = () => {
    return (
        <div className="Chips">
            <div className="message">
                <h1>You got some chips!</h1>
                <p>Part of a well rounded diet... or something like that !</p>
                <p> <Link to="/">Back Home</Link> </p>
            </div>
        </div>
    )
}

export default Chips;