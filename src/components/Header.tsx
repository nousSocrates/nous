import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const logo_text = {
    background: "linear-gradient(to top, #ffe838, #fd57bf)",
    "font-family": ' "Courier New", Courier',
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "user-select": "none",
   
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1 style={logo_text}>nousSocrates</h1>
        </Link>
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><NavLink to="/" className="active">Home</NavLink></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/my_education">Education</Link></li>
          <li><Link to="/my_jobs">Profession</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/testimonies">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


