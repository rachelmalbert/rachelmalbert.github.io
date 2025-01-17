import "../styles/Hero.css";
import React from "react";
import Navbar from "./Navbar";
import image from "../assets/images/avatar.svg";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import the anchor link component

function Hero() {
  return (
    <section id="hero" className="hero">
      <Navbar />
      <div className="hero-content">
        <div className="left">
          <h3>Hi, my name is</h3>
          <h1>Rachel Albert</h1>
          <p>Recent CS Graduate | Passionate About Web Development & Database Systems</p>
          <a href="/Albert_Rachel_Resume.pdf" class="cta-button" download>
            <i class="fa-solid fa-download download-icon"></i> Download Resume
          </a>
        </div>
        <div class="avatar-container">
          <img className="avatar" src={image} alt="avatar"></img>
        </div>
      </div>

      <a href="#projects" class="scroll-down-btn">
        <AnchorLink href="#projects" className="arrow"></AnchorLink>
      </a>
    </section>
  );
}

export default Hero;

// HERO WITH ICON

//  <section id="hero" className="hero">
//    <div className="overlay"></div> {/* The overlay div */}
//    <Navbar />
//    <div className="hero-content">
//      <div>
//        <h1>RACHEL ALBERT</h1>
//        <p>Software Engineer</p>
//        <a href="#about" className="cta-button">
//          Download Resume
//        </a>
//      </div>
//      <img src={image} width="100"></img>
//    </div>
//    <button className="scroll-btn"> V </button>
//    {/* <div className="scroll-btn"></div> */}
//  </section>

// HERO WITHOUT ICON

//  <section id="hero" className="hero">
//    <div className="overlay"></div> {/* The overlay div */}
//    <Navbar />
//    <div className="hero-content">
//      <h1>RACHEL ALBERT</h1>
//      <p>Software Engineer</p>
//      <a href="#about" className="cta-button">
//        Download Resume
//      </a>
//    </div>
//    <button className="scroll-btn"> V </button>
//  </section>
