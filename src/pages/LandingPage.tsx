import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <section className="landing-page">
      <div className="content">
        <h1>Hello, I'm <span>nousSocrates</span></h1>
        <p>A Junior School Teacher, Music & Coding Educator, and Founder of Socrates Schools.</p>
        <div className="socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
