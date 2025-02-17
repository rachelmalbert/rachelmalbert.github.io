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
          <p class="degree">Full-Stack Web Developer</p>
          <div class="hero-contact-links">
            <a href="https://www.linkedin.com/in/rachel-albert/" class="contact-link" target="_blank">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn Icon" />
            </a>

            <a href="https://github.com/rachelmalbert" class="contact-link" target="_blank">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub Icon" />
            </a>
          </div>
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


