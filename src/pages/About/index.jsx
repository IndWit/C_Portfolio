import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../components/common/ThemeToggle';
import Footer from '../../components/common/Footer';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import FunFactsSection from './FunFactsSection';

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="w-full bg-[var(--bg-primary)]">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-[49px] bg-[var(--bg-primary)] border-r border-[var(--border-color)] z-10 hidden lg:flex flex-col justify-between items-center py-4">
          <div className="w-[1px] h-[190px] bg-[#abb2bf]"></div>
          <div className="flex flex-col gap-2">
            <img src="/images/img_github.svg" className="w-8 h-8" alt="GitHub" />
            <img src="/images/img_dribble.svg" className="w-8 h-8" alt="Dribbble" />
            <img src="/images/img_figma.svg" className="w-8 h-8" alt="Figma" />
          </div>
        </div>

        {/* Header */}
        <header className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative z-20">
          <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px]">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/images/img_union_white_a700.svg" className="w-4 h-4" alt="Logo" />
                <span className="text-[var(--text-primary)] font-bold text-base font-['Fira_Code']">Elias</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-4">
                <Link to="/" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">home</span>
                </Link>
                <Link to="/projects" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">works</span>
                </Link>
                <div className="flex items-center">
                  <span className="text-[var(--text-accent)] font-medium text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-primary)] font-medium text-base font-['Fira_Code']">about-me</span>
                </div>
                <Link to="/contact" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">contacts</span>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--text-secondary)] font-semibold text-base font-['Fira_Code']">EN</span>
                  <img src="/images/img_group_58_blue_gray_200.svg" className="w-[10px] h-[5px]" alt="Language" />
                </div>
                <ThemeToggle />
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="w-5 h-0.5 bg-[var(--text-primary)] mb-1"></span>
                  <span className="w-5 h-0.5 bg-[var(--text-primary)] mb-1"></span>
                  <span className="w-5 h-0.5 bg-[var(--text-primary)]"></span>
                </div>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
              <div className="flex flex-col gap-4">
                <Link to="/" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">home</span>
                </Link>
                <Link to="/projects" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">works</span>
                </Link>
                <div className="flex items-center">
                  <span className="text-[var(--text-accent)] font-medium text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-primary)] font-medium text-base font-['Fira_Code']">about-me</span>
                </div>
                <Link to="/contact" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">contacts</span>
                </Link>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[var(--text-secondary)] font-semibold text-base font-['Fira_Code']">Theme:</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        </header>
        
        <main>
          {/* Page Title Section */}
          <section className="w-full bg-[var(--bg-primary)] py-8 sm:py-12">
            <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-semibold text-[var(--text-accent)] font-['Fira_Code']">/</span>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] font-['Fira_Code']">about-me</h1>
                </div>
                <p className="text-base text-[var(--text-primary)] font-['Fira_Code']">Who am I?</p>
              </div>
            </div>
          </section>

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
