import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Products from "../Products/Products.jsx";
import Cart from "../Cart/Cart.jsx";
import Checkout from "../Checkout/Checkout.jsx";
import About from "../About/About.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
console.log(stripePromise);

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Elements stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          </Elements>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
