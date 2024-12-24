import "../styles/Navbar.css";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // Import the anchor link component

const Navbar = () => {
  return (
    // <div className="navbar">
    <ul className="navbar">
      <li>
        <AnchorLink href="#about" className="nav-link">
          About
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#education" className="nav-link">
          Education
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#projets" className="nav-link">
          Projects
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#skills" className="nav-link">
          Skills
        </AnchorLink>
      </li>
      <li>
        <AnchorLink href="#contact" className="nav-link">
          Contact
        </AnchorLink>
      </li>
    </ul>
    // </div>
  );
};

export default Navbar;
