import React from "react";
// import Typical from "react-typical";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <section className="landing-page">
      <div className="content">
        <h1>
          Hello, I'm{" "}
          {/* <span>
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                "nousSocrates", 2000,
                "a Teacher", 2000,
                "a Music Educator", 2000,
                "a Web Developer", 2000,
                "Founder of Socrates Schools", 2000,
              ]}
            />
          </span> */}
        </h1>
        <p>
          A Junior School Teacher, Music & Coding Educator, Web Developer and
          Founder of Socrates Schools.
        </p>
        <div className="socials">
          <a
            href="https://whatsapp.com/dl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
