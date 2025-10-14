import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ContactsPage from './pages/Contacts';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;