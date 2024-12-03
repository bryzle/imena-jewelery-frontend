import React from "react";
import "./About.css";

import main_photo1 from "../../assets/About-us-image-1.svg";
import main_photo2 from "../../assets/About-us-image-2.svg";
import main_photo3 from "../../assets/About-us-image-3.svg";
function About() {
  return (
    <div className="about__page">
      <h1>About Us</h1>

      <div className="about__photos-container">
        <img src={main_photo1} className="about__photos" alt="first photo" />
        <img src={main_photo2} className="about__photos"  alt="second photo" />
        <img src={main_photo3} className="about__photos"  alt="third photo" />
      </div>
      <p className="about__text">
        At Imena Jewelry Manufacturing Inc., our passion for crafting exquisite,
        high-end jewelry is deeply rooted in our family’s legacy of artistry and
        dedication. For generations, we have embraced the art of jewelry making,
        blending timeless techniques with innovative designs to create pieces
        that tell a story. As a family-run business, we take immense pride in
        treating every creation with the care and precision it deserves,
        ensuring our clients receive not just jewelry but heirlooms to cherish
        for years to come. Our commitment to quality and authenticity is matched
        only by our belief in building lasting relationships with those who wear
        and trust our designs. From our family to yours, we invite you to
        experience the unparalleled craftsmanship and heartfelt dedication that
        define Imena Jewelry Manufacturing Inc.
      </p>
      {/* <img src={main_photo1} className="main__media" alt="main photo 1" /> */}
      <div className="about__page-text"></div>
    </div>
  );
}

export default About;
