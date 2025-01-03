import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🌱" },
  { name: "Music Composition", icon: "🎼" },
  { name: "Teaching", icon: "📘" },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="hire-me-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = "/contact"}
      >
        Hire Me
      </motion.button>
    </section>
  );
};

export default Skills;
