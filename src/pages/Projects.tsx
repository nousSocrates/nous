import React from "react";
import "../css/Projects.css";

const projects = [
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website built with React and deployed on Vercel.",
    image: "/static/images/felo.jpg",
    link: "https://socratesschools.co.ke",
  },
  {
    title: "Socrates Schools Website",
    description: "An educational website focusing on music and coding.",
    image: "/static/images/coolhome.jpg",
    link: "https://socratesschools.co.ke",
  },
  {
    title: "E-commerce Platform",
    description: "Responsive online store using Django and React.",
    image: "/static/images/handson.jpg",
    link: "https://socratesschools.co.ke",
  },
  {
    title: "Comprehensive School Website",
    description: "Responsive online store using Django and React.",
    image: "/static/images/orchetra.jpg",
    link: "https://socratesschools.co.ke",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-hover">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="btn btn-success">Explore</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
