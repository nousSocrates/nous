import React from "react";
import "./AcademicBackground.css";

const academicEvents = [
  {
    year: "2020",
    title: "Graduated from Moi University",
    description: "Bachelor of Arts with Education, Distinction in ABRSM Music Theory.",
  },
  {
    year: "2024",
    title: "ABRSM Music Theory Grades 6-8",
    description: "Achieved advanced certifications in Music Theory.",
  },
];

const AcademicBackground: React.FC = () => {
  return (
    <section className="academic-background">
      <h2>Academic Background</h2>
      <div className="timeline">
        {academicEvents.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicBackground;
