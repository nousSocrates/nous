import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header.tsx';

import LandingPage from './pages/LandingPage.tsx';
import Skills from './pages/Skills.tsx';
// import AcademicBackground from './pages/AcademicBackground.tsx';
// import ProfessionalBackground from './pages/ProfessionalBackground.tsx';
// import Projects from './pages/Projects.tsx';
// import ContactForm from './pages/ContactForm.tsx';

// import Footer from './components/Footer.tsx';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/my_education" element={<AcademicBackground />} />
          <Route path="/my_jobs" element={<ProfessionalBackground />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
