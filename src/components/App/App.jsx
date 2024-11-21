import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Product from "../Product/Product.jsx";
import Cart from "../Cart/Cart.jsx";
import Checkout from "../Checkout/Checkout.jsx";
import About from "../About/About.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
