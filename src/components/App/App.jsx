import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Product from "../Product/Product.jsx";
import Cart from "../Cart/Cart.jsx";
import Checkout from "../Checkout/Checkout.jsx";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
