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
import BuyOrder from "../Components/BuyOrder";
import OrderSuccess from "../Components/OrderSuccess";
import WhishList from "../Components/WhishList";

const Navbar2 = () => {
  return (
    <div>
      <NavbarLinks />
      <Navbar3 />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/fullsignup" element={<FullSignUp />} />
        <Route path="/wishList" element={<WhishList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/" element={<Women />} />
        <Route path="/cart" element={<Cart />} />   
        <Route path="/order" element={<BuyOrder />} />  
        <Route path="/orderSuccess" element={<OrderSuccess />} />     
      </Routes>
    </div>
  );
};

export default Navbar2;
