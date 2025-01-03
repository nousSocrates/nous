import React from "react";
import { motion } from "framer-motion";
import "../css/timeline.css";

const academicEvents = [
  {
    icon: "🏫",
    Institution: "Moi University",
    year: "2014-2018",
    description: "Bachelor of Arts with Education. Specialized in Music and English, achieving a Distinction in ABRSM Music Theory.",
  },
  {
    icon: "🎓",
    Institution: "Kenyatta University",
    year: "2019-2021",
    description: "Postgraduate Diploma in Education, focusing on curriculum design and educational leadership.",
  },
  {
    icon: "🎼",
    Institution: "ABRSM (Associated Board of the Royal Schools of Music)",
    year: "2021",
    description: "Achieved a Distinction in Music Theory Grade 8, with advanced skills in composition and analysis.",
  },
  {
    icon: "💻",
    Institution: "Udemy",
    year: "2022",
    description: "Completed advanced courses in Web Development, specializing in React and Django.",
  },
  {
    icon: "📚",
    Institution: "ACK St Ann's Nanyeni Primary School",
    year: "2001 - 2008",
    description: "Earned certifications in Python for Everybody and Full-Stack Development.",
  },
];

const AcademicBackground: React.FC = () => {
  return (
    <section className="timeline-background">
      <h2>Academic Timeline</h2>
      <div className="timeline">
        {academicEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: index * 1 }}
          >
            <div className="timeline-content">
              <motion.div className="icon" whileHover={{ scale: 1.2 }}>
                <span>{event.icon}</span>
              </motion.div>
              <h3>{event.Institution}</h3>
              <small className="burge success">{event.year}</small>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AcademicBackground;

