import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import InfiniteScroll from '../../components/common/InfiniteScroll';
import CodeTypingEffect from '../../components/common/CodeTypingEffect';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Elias - Web Designer & Front-End Developer | Portfolio</title>
        <meta name="description" content="Elias is a skilled web designer and front-end developer crafting responsive websites where technologies meet creativity. View projects, skills, and contact information." />
        <meta property="og:title" content="Elias - Web Designer & Front-End Developer | Portfolio" />
        <meta property="og:description" content="Elias is a skilled web designer and front-end developer crafting responsive websites where technologies meet creativity. View projects, skills, and contact information." />
      </Helmet>

      <main className="bg-[var(--bg-primary)] min-h-screen relative">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Top Right Dots Grid (5x5) - More Visible */}
          <div className="absolute top-20 right-10 lg:right-20 opacity-50">
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">
                  {[...Array(5)].map((_, colIndex) => (
                    <div 
                      key={colIndex} 
                      className="w-2 h-2 bg-[var(--border-color)] rounded-sm"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Large Code Symbol - Center Right - More Visible */}
          <div className="absolute top-1/3 right-5 lg:right-10 opacity-35">
            <div className="text-[120px] lg:text-[200px] font-bold text-[var(--text-accent)] font-['Fira_Code'] leading-none">&lt;/&gt;</div>
          </div>

          {/* Bottom Left Square Border - More Visible */}
          <div className="absolute bottom-40 left-5 lg:left-10 opacity-50">
            <div className="w-24 h-24 lg:w-32 lg:h-32 border-2 border-[var(--border-color)]"></div>
          </div>

          {/* Large Curly Brace - Bottom Right - More Visible */}
          <div className="absolute bottom-10 lg:bottom-20 right-10 lg:right-20 opacity-35">
            <div className="text-[150px] lg:text-[250px] font-bold text-[var(--border-color)] font-['Fira_Code'] leading-none">{'{'}</div>
          </div>

          {/* Animated Dots Grid - Top Left - More Visible */}
          <div className="absolute top-32 lg:top-40 left-5 lg:left-10 opacity-50">
            <div className="flex flex-col gap-3">
              {[...Array(4)].map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-3">
                  {[...Array(4)].map((_, colIndex) => (
                    <div 
                      key={colIndex} 
                      className="w-2 h-2 bg-[var(--text-accent)] rounded-sm"
                      style={{
                        animation: 'pulse-glow 3s ease-in-out infinite',
                        animationDelay: `${(rowIndex + colIndex) * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Corner Bracket - Top Left - More Visible */}
          <div className="absolute top-5 lg:top-10 left-0 opacity-60">
            <div className="w-20 h-20 lg:w-28 lg:h-28 border-t-4 border-l-4 border-[var(--text-accent)]"></div>
          </div>

          {/* Corner Bracket - Bottom Right - More Visible */}
          <div className="absolute bottom-5 lg:bottom-10 right-0 opacity-60">
            <div className="w-20 h-20 lg:w-28 lg:h-28 border-b-4 border-r-4 border-[var(--text-accent)]"></div>
          </div>

          {/* Middle Left Function Parentheses - More Visible */}
          <div className="absolute top-1/2 left-2 lg:left-5 transform -translate-y-1/2 opacity-40">
            <div className="text-[80px] lg:text-[140px] font-bold text-[var(--text-secondary)] font-['Fira_Code'] leading-none">{'()'}</div>
          </div>

          {/* Additional Large Dots - Middle Right */}
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2 opacity-50">
            <div className="flex flex-col gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-[var(--text-accent)] rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Horizontal Line - Top */}
          <div className="absolute top-32 left-1/4 right-1/4 opacity-35">
            <div className="h-0.5 bg-[var(--border-color)]"></div>
          </div>

          {/* Vertical Line - Left */}
          <div className="absolute left-20 top-1/4 bottom-1/4 opacity-25 hidden lg:block">
            <div className="w-0.5 h-full bg-[var(--border-color)]"></div>
          </div>

          {/* Circle - Top Right Corner */}
          <div className="absolute top-10 right-40 opacity-35 hidden lg:block">
            <div className="w-16 h-16 border-2 border-[var(--text-accent)] rounded-full"></div>
          </div>

          {/* Semi Circle - Bottom Left */}
          <div className="absolute bottom-32 left-32 opacity-30 hidden lg:block">
            <div className="w-20 h-20 border-4 border-[var(--text-secondary)] rounded-full border-t-transparent border-r-transparent rotate-45"></div>
          </div>

          {/* Hash Symbol - Top Center */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 opacity-25 hidden lg:block">
            <div className="text-[80px] font-bold text-[var(--text-accent)] font-['Fira_Code'] leading-none">#</div>
          </div>

          {/* Array Brackets - Bottom Center */}
          <div className="absolute bottom-32 left-1/3 opacity-30 hidden lg:block">
            <div className="text-[100px] font-bold text-[var(--border-color)] font-['Fira_Code'] leading-none">[]</div>
          </div>

          {/* Code Comment Slashes - Middle */}
          <div className="absolute top-2/3 right-1/4 opacity-25 hidden lg:block">
            <div className="text-[60px] font-bold text-[var(--text-secondary)] font-['Fira_Code'] leading-none">//</div>
          </div>

          {/* Diagonal Line Pattern - Bottom */}
          <div className="absolute bottom-24 left-1/2 opacity-20 hidden lg:block">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-[var(--text-accent)] transform rotate-45"></div>
              ))}
            </div>
          </div>

          {/* Plus Symbol - Middle Right */}
          <div className="absolute top-1/3 right-1/3 opacity-30 hidden lg:block">
            <div className="text-[70px] font-bold text-[var(--border-color)] font-['Fira_Code'] leading-none">+</div>
          </div>

          {/* Asterisk - Top Left Area */}
          <div className="absolute top-1/4 left-1/4 opacity-25 hidden lg:block">
            <div className="text-[50px] font-bold text-[var(--text-accent)] font-['Fira_Code'] leading-none">*</div>
          </div>

          {/* Animated Border Box - Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
            <div className="w-40 h-40 border border-dashed border-[var(--text-accent)] animate-pulse-glow"></div>
          </div>
        </div>

        {/* Content with higher z-index */}
        <div className="relative z-10">
          <HeroSection />
          <InfiniteScroll />
          <ProjectsSection />
          <CodeTypingEffect />
          <SkillsSection />
          <AboutSection />
        </div>
      </main>
    </>
  );
};

export default Home;