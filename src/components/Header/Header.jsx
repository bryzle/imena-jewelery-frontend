import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav-container">
        <ul className="header__container-left">
          <Link to="/about" >
            <li className="header__menu">About Us</li>
          </Link>
          <Link to="/products" >
            <li className="header__menu">Products</li>
          </Link>
        </ul>
        <div className="logo">
          <img src={logo} className="header-logo" alt="header logo" />
        </div>
        <ul className="header__container-right">
          <Link to="/cart" >
            <li className="header__menu">Cart</li>
          </Link>
          <Link to="/checkout" className="header__menu">
            <li className="header__menu">Checkout</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
