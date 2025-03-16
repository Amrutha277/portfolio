import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import "../index.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><NavLink to="/" onClick={() => setIsMobile(false)}>Hello!</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsMobile(false)}>About</NavLink></li>
        <li><NavLink to="/skills" onClick={() => setIsMobile(false)}>Skills</NavLink></li>
        <li><NavLink to="/education" onClick={() => setIsMobile(false)}>Education</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setIsMobile(false)}>Projects</NavLink></li>
      </ul>

      {/* Hamburger Icon - Moved to Right */}
      <div className="hamburger-menu" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
