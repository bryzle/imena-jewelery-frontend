import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="Footer__section">
        <div className="Footer__container">
          <h1 className="Footer__header">NEED HELP?</h1>
          <p className="Footer__text">Monday - Friday 8am EST - 5pm</p>
          <p className="Footer__text">Saturday - Sunday 10am EST - 4pm</p>
          <p className="Footer__text">(212)-123-4567</p>
          <p className="Footer__text">service@ImenaJewelry.com</p>
        </div>
        <div className="Footer__container">
          <h1 className="Footer__header">YOUR ORDER</h1>
          <p className="Footer__text">Order Status</p>
          <p className="Footer__text">Shipping & Returns</p>
          <p className="Footer__text">Terms & Conditions</p>
        </div>
        <div className="Footer__container">
          <h1 className="Footer__header">Other Resources</h1>
          <p className="Footer__text">Promotions and Offers</p>
          <p className="Footer__text">Jewelry Care & Repair</p>
          <p className="Footer__text">Style Now, Pay Later</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
