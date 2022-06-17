import React from "react";
import NavbarLinks from "./NavbarLinks";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
// import Men from '../Products/Men';
// import Women from '../Products/Women';
import SignUp from "../Login/SignUp";
import Cart from "../Pages/Cart";
import Navbar3 from "./Navbar3";
import FullSignUp from "../Login/FullSignUp";
import Products from "../Pages/Products";
import Product from "../Pages/Product";
import Women from "../Pages/Women";

const Navbar2 = () => {
  return (
    <div>
      <NavbarLinks />
      <Navbar3 />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/fullsignup" element={<FullSignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />        
      </Routes>
    </div>
  );
};

export default Navbar2;
