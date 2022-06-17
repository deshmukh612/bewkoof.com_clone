import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar3 = () => {
  return (
    <div id="mainProd">
        <div id="cat1">
          <Link to="/products" id="ca1">Men</Link>
        </div>
        <div id="cat1">
          <Link to="/women" id="ca1">Women</Link>
        </div>
        <div id="cat1">
          <Link to="/" id="ca1">Accessories</Link>
        </div>
      </div>
  )
}

export default Navbar3