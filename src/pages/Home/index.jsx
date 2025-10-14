import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Elias - Web Designer & Front-End Developer | Portfolio</title>
        <meta name="description" content="Elias is a skilled web designer and front-end developer crafting responsive websites where technologies meet creativity. View projects, skills, and contact information." />
        <meta property="og:title" content="Elias - Web Designer & Front-End Developer | Portfolio" />
        <meta property="og:description" content="Elias is a skilled web designer and front-end developer crafting responsive websites where technologies meet creativity. View projects, skills, and contact information." />
      </Helmet>

      <main className="bg-[#1c2421] min-h-screen">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Home;