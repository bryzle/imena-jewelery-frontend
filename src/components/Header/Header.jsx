import React from "react";
import logo from "../../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="header">
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="App Logo" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
