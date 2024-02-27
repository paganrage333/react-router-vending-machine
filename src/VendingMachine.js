import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Soda from "./Soda"
import Chips from "./Chips"
import Mystery from "./Mystery"


const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/soda" element={<Soda />} />
                <Route path="/chips" element={<Chips />} />
                <Route path="/mystery" element={<Mystery />} />
            </Routes>
        </div>
    )
}

export default VendingMachine;