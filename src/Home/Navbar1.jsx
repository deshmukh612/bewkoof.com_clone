import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar1 = () => {
  return (
    <div id="nav1" >
        <Link to='/' id="lin" >Offer</Link>
        <Link to='/' id="lin">Fanbook</Link>
        <Link to='/' id="lin">Download App</Link>
        <Link to='/' id="lin">TriBe Membership</Link>
    </div>
  )
}

export default Navbar1