import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import FunFactsSection from './FunFactsSection';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me - Elias | Self-Taught Front-End Developer from Kyiv, Ukraine</title>
        <meta 
          name="description" 
          content="Learn about Elias, a passionate self-taught front-end developer from Kyiv, Ukraine. Discover his skills in React, JavaScript, Python and his journey in web development over the past year." 
        />
        <meta property="og:title" content="About Me - Elias | Self-Taught Front-End Developer from Kyiv, Ukraine" />
        <meta property="og:description" content="Learn about Elias, a passionate self-taught front-end developer from Kyiv, Ukraine. Discover his skills in React, JavaScript, Python and his journey in web development over the past year." />
      </Helmet>

      <div className="min-h-screen bg-background-main">
        <Header />
        
        <main>
          {/* Page Title Section */}
          <section className="w-full bg-background-main py-8 sm:py-12">
            <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-semibold text-text-secondary">/</span>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-text-accent">about-me</h1>
                </div>
                <p className="text-base text-text-accent">Who am I?</p>
              </div>
            </div>
          </section>

          {/* Left Sidebar with Social Links */}
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 z-10">
            <div className="w-px h-48 bg-text-primary"></div>
            <div className="flex flex-col gap-2">
              <img src="/images/img_github.svg" alt="GitHub" className="w-8 h-8" />
              <img src="/images/img_dribble.svg" alt="Dribbble" className="w-8 h-8" />
              <img src="/images/img_figma.svg" alt="Figma" className="w-8 h-8" />
            </div>
          </div>

          <AboutSection />
          <SkillsSection />
          <FunFactsSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;