import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="Navbar">
            <Link
                to="/"
                className={`${location.pathname === "/" ? "navItem-active" : ""}`}>
                    Home
            </Link>
            <Link
                to="/soda"
                className={`${location.pathname === "/soda" ? "navItem-active" : ""}`}>
                    Soda
            </Link>
            <Link
                to="/chips"
                className={`${location.pathname === "/chips" ? "navItem-active" : ""}`}>
                    Chips
            </Link>
            <Link
                to="/mystery"
                className={`${location.pathname === "/mystery" ? "navItem-active" : ""}`}>
                    Mystery
            </Link>
            
            <p style={{color: "#FFFFFF"}}>{location.pathname}</p>
        </div>
    )
}

export default Navbar;