import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../components/common/ThemeToggle';
import Footer from '../../components/common/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Projects = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [completeAppsRef, completeAppsVisible] = useScrollAnimation();
  const [smallProjectsRef, smallProjectsVisible] = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Projects Showcase | Elias Portfolio - Web Developer & Designer</title>
        <meta name="description" content="Explore Elias's comprehensive portfolio of web development projects including Discord bots, React applications, and creative web solutions. View live demos and source code." />
        <meta property="og:title" content="Projects Showcase | Elias Portfolio - Web Developer & Designer" />
        <meta property="og:description" content="Explore Elias's comprehensive portfolio of web development projects including Discord bots, React applications, and creative web solutions. View live demos and source code." />
      </Helmet>

      <div className="w-full bg-[var(--bg-primary)]">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-[49px] bg-[var(--sidebar-bg)] border-r border-[var(--border-color)] z-10 hidden lg:flex flex-col justify-between items-center py-4">
          <div className="w-[1px] h-[190px] bg-[var(--border-color)]"></div>
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
                <div className="flex items-center">
                  <span className="text-[var(--text-accent)] font-medium text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-primary)] font-medium text-base font-['Fira_Code']">works</span>
                </div>
                <Link to="/about" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">about-me</span>
                </Link>
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
                <div className="flex items-center">
                  <span className="text-[var(--text-accent)] font-medium text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-primary)] font-medium text-base font-['Fira_Code']">works</span>
                </div>
                <Link to="/about" className="flex items-center">
                  <span className="text-[var(--text-accent)] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[var(--text-secondary)] font-normal text-base font-['Fira_Code']">about-me</span>
                </Link>
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
        
        <main className="w-full relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-40 right-10 hidden lg:block opacity-15">
            <div className="flex flex-col gap-4">
              {[...Array(5)]?.map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {[...Array(5)]?.map((_, colIndex) => (
                    <div 
                      key={colIndex} 
                      className="w-1 h-1 bg-[var(--border-color)] rounded-sm"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/3 left-0 hidden lg:block opacity-10">
            <div className="text-[180px] font-bold text-[var(--text-accent)] font-['Fira_Code']">&#123;&#125;</div>
          </div>

          <div className="absolute bottom-40 right-20 hidden lg:block opacity-20">
            <div className="w-24 h-24 border border-[var(--border-color)]"></div>
          </div>

          {/* Page Header Section */}
          <section className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px] pt-[52px] pb-[42px]">
            <div className="w-full">
              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-row items-center">
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[var(--text-accent)] font-['Fira_Code']">
                    /
                  </span>
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[var(--text-primary)] font-['Fira_Code']">
                    projects
                  </span>
                </div>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[18px] sm:leading-[20px] md:leading-[21px] text-[var(--text-primary)] font-['Fira_Code']">
                  List of my projects
                </p>
              </div>
            </div>
          </section>

          {/* Main Content Area */}
          <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px] pb-[42px] relative z-10">
            <div className="w-full">
              <div className="flex flex-col gap-[48px]">
                
                {/* Complete Apps Section */}
                <div className="flex flex-col gap-[48px]">
                  <div 
                    ref={completeAppsRef}
                    className={`flex flex-row items-center ${
                      completeAppsVisible ? 'animate-fade-in-left' : 'opacity-0'
                    }`}
                  >
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[var(--text-accent)] font-['Fira_Code']">
                      #
                    </span>
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[var(--text-primary)] font-['Fira_Code']">
                      complete-apps
                    </span>
                  </div>

                  {/* Complete Apps Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* ChertNodes Project */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <img src="/images/img_rectangle_22.png" alt="ChertNodes" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">HTML</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">SCSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Python</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Flask</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          ChertNodes
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Minecraft servers hosting
                        </p>
                        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[16px]">
                          <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors">
                            Live &lt;~&gt;
                          </button>
                          <button className="px-[16px] py-[8px] border border-[var(--border-color)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code'] hover:bg-[var(--border-color)] hover:text-[var(--bg-primary)] transition-colors">
                            Cached &gt;=
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Kahoot Answers Viewer Project */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <img src="/images/img_rectangle_22_1.png" alt="Kahoot Answers Viewer" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">CSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Express</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Node.js</span>
                        </div>
                      </div>
                      <div className="p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[31px] text-[var(--text-primary)] font-['Fira_Code']">
                          Kahoot Answers Viewer
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Get answers to your kahoot quiz
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* ProtectX Project */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <img src="/images/img_rectangle_22_200x330.png" alt="ProtectX" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center justify-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">React</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Express</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Discord.js</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Node.js</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          ProtectX
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Discord anti-crash bot
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--border-color)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code'] hover:bg-[var(--border-color)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Cached &gt;=
                        </button>
                      </div>
                    </div>

                    {/* Kotik Bot Project */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <img src="/images/img_rectangle_22_2.png" alt="Kotik Bot" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">HTML</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">CSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">JS</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          Kotik Bot
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Multi-functional discord bot
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Portfolio Project */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <img src="/images/img_rectangle_22_3.png" alt="Portfolio" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Vue</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">TS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Less</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          Portfolio
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">
                          You are using it rn
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Projects Section */}
                <div className="flex flex-col gap-[48px]">
                  <div 
                    ref={smallProjectsRef}
                    className={`flex flex-row items-center ${
                      smallProjectsVisible ? 'animate-fade-in-left' : 'opacity-0'
                    }`}
                  >
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[var(--text-accent)] font-['Fira_Code']">
                      #
                    </span>
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[var(--text-primary)] font-['Fira_Code']">
                      small-projects
                    </span>
                  </div>

                  {/* Small Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* Bot Boilerplate */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Discord.js</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">TS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">JS</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[12px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          Bot boilerplate
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Start creating scalable discord.js bot with typescript in seconds
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* My Blog */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">VUE</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">CSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">JS</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[12px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          My blog
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Front-end of my future blog website written in vue
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Chess Pro */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Figma</span>
                        </div>
                      </div>
                      <div className="p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[12px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          Chess pro
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Figma landing page about service for viewing chess tournaments
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Figma &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Crash Protect Website */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Figma</span>
                        </div>
                      </div>
                      <div className="p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[31px] text-[var(--text-primary)] font-['Fira_Code']">
                          Crash protect website
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Figma template for website about anti-raid, anti-crash discord bot
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Figma &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* CSS Experiments */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">HTML</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">CSS</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          CSS expirements
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Collection of my different little projects in css
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Web Dev nvim config */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Lua</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">NeoVim</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          Web Dev nvim config
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Config for neovim perfect for web developer
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Ooku */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Python</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Quart</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">HTML</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          Ooku
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Simple link shortener with auth
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* School Website */}
                    <div className="border border-[var(--border-color)] flex flex-col">
                      <div className="p-[8px] border-b border-[var(--border-color)]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[var(--text-secondary)] font-['Fira_Code']">Figma</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[var(--border-color)] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[var(--text-primary)] font-['Fira_Code']">
                          School website
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[var(--text-secondary)] font-['Fira_Code']">
                          Figma template website for my school
                        </p>
                        <button className="px-[16px] py-[8px] border border-[var(--text-accent)] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[var(--text-primary)] font-['Fira_Code'] hover:bg-[var(--text-accent)] hover:text-[var(--bg-primary)] transition-colors w-fit">
                          Figma &lt;~&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Projects;