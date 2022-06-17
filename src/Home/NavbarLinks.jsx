import React from "react";
import { Link } from "react-router-dom";
import CartCounter from "../Components/CartCounter";
import "./Navbar.css";

const NavbarLinks = () => {
  return (
    <div id="cont">
      <div >
        <Link to="/">
          <img id="logo"
            src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg"
            alt="Company_Logo"
          />
        </Link>
      </div>
      <div id="prod">
        <div class="cat">
          <Link to="/products" id="ca">Men</Link>
        </div>
        <div class="cat">
          <Link to="/" id="ca">Women</Link>
        </div>
        <div class="cat">
          <Link to="/" id="ca">Accessories</Link>
        </div>
      </div>
      <div id="right">
        <div>
          <input placeholder="Search by category" id="inp"/>
        </div>
        <div>
          <Link to="/login" id="ca">Login</Link>
        </div>
        <div>
          <Link to="/wishlist">
            <i class="fa fa-heart-o" aria-hidden="true" id="icon"></i>
          </Link>
        </div>
        <div id="car">
          <Link to="/cart">
            <i class="fa fa-shopping-bag" aria-hidden="true" id="icon"></i> 
          </Link>
          <CartCounter />
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
