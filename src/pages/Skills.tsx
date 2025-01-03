import React from "react";
import { motion } from "framer-motion";
import "../css/Skills.css";

const skills = [
  { name: "JavaScript", icon: "🟨", level: 85, color: "#F7DF1E" },
  { name: "React", icon: "⚛️", level: 80, color: "#61DAFB" },
  { name: "Python", icon: "🐍", level: 90, color: "#306998" },
  { name: "Django", icon: "🌱", level: 75, color: "#092E20" },
  { name: "HTML", icon: "🔤", level: 95, color: "#E34F26" },
  { name: "CSS", icon: "🎨", level: 88, color: "#1572B6" },
  { name: "Music Composition", icon: "🎼", level: 95, color: "#A020F0" },
  { name: "Teaching", icon: "📘", level: 88, color: "#008080" },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      
      {/* Skill Cards */}
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
      
      {/* Skill Bars */}
      <h3>Proficiency Levels</h3>
      <div className="skill-bars">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-info">
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="bar-container">
              <motion.div
                className="bar"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                style={{
                  backgroundColor: skill.color,
                }}
              ></motion.div>
            </div>
            <span className="skill-level">{skill.level}%</span>
          </div>
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
