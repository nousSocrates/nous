import React from "react";
import "./ProfessionalBackground.css";

const professionalEvents = [
  {
    year: "2023 - Present",
    title: "Junior Secondary Teacher",
    description: "Teaching students, developing lesson plans, and mentoring young learners in music and coding.",
  },
  {
    year: "2024",
    title: "Founder, Socrates Schools",
    description: "Established a school focusing on music and coding education for young learners.",
  },
  {
    year: "2024",
    title: "Freelance Web Developer",
    description: "Developed modern, responsive websites using React and Django for clients and personal projects.",
  },
];

const ProfessionalBackground: React.FC = () => {
  return (
    <section className="professional-background">
      <h2>Professional Background</h2>
      <div className="timeline">
        {professionalEvents.map((event, index) => (
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

export default ProfessionalBackground;
