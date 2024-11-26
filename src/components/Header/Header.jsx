import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container-left">
          <Link to="/about" className="header__menu">
            About Us
          </Link>
          <Link to="/products" className="header__menu">
            Products
          </Link>
        </div>
        <div className="logo">
          <img src={logo} className="header-logo" alt="header logo" />
        </div>
        <div className="header__container-right">
          <Link to="/cart" className="header__menu">
            Cart
          </Link>
          <Link to="/checkout" className="header__menu">
            Checkout
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
