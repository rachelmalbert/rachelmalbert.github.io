import "../styles/Hero.css";
import React from "react";
import Navbar from "./Navbar";
import image from "../assets/images/avatar.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="overlay"></div> {/* The overlay div */}
      <Navbar />
      <div className="hero-content">
        <h1>RACHEL ALBERT</h1>
        <p> Recent Computer Science Graduate | Aspiring Software Developer</p>
        <a href="#about" className="cta-button">
          Download Resume
        </a>
      </div>
      <button className="scroll-btn"> V </button>
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
