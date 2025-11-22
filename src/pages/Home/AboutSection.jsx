import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contactsHeaderRef, contactsHeaderVisible] = useScrollAnimation();
  
  return (
    <section className="w-full bg-[var(--bg-primary)] py-8 lg:py-16">
      <div className="w-full max-w-[1366px] mx-auto px-4">
        {/* Decorative Element */}
        <div className="w-[39px] sm:w-[60px] lg:w-[78px] h-auto mb-16 hidden lg:block">
          <img src="/images/img_rectangle_25_154x78.png" className="w-full h-auto" alt="Decoration" />
        </div>

        <div className="w-full max-w-[1188px] mx-auto px-4 lg:px-[90px]">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`flex items-center gap-4 mb-8 ${
              headerVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <div className="flex items-center">
              <span className="text-[var(--text-accent)] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">#</span>
              <span className="text-[var(--text-primary)] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">about-me</span>
            </div>
            <div className="w-[163px] sm:w-[250px] lg:w-[326px] h-[1px] bg-[var(--text-accent)]"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="lg:w-[50%]">
              <div className="flex flex-col gap-6">
                <p className="text-[var(--text-secondary)] text-sm sm:text-base font-normal leading-[20px] sm:leading-[26px] font-['Fira_Code']">
                   Hello, I’m Induma!
                  <br /><br />
                   I’m a results-driven Computing and Information Systems undergraduate with hands-on experience in both web and mobile development. 
                  I specialize in full-stack development, data analysis, and effective team coordination, always aiming to deliver high-quality and efficient solutions.
                  <br /><br />
                  With strong communication and collaboration skills, I enjoy working in dynamic environments that encourage creativity and innovation. 
                  A passionate problem solver with a sharp design sense, I’m constantly exploring emerging technologies and building impactful software solutions 
                  while growing as a forward-thinking developer.
                </p>
                
                <Link to="/about">
                  <button className="border border-[var(--text-accent)] px-4 py-2 text-[var(--text-primary)] font-medium text-base font-['Fira_Code'] w-fit hover:bg-[var(--text-accent)] hover:bg-opacity-10 transition-colors">
                    Read more -&gt;
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-[32%] relative">
              <div className="relative w-full max-w-[342px] mx-auto">
                {/* Main Image */}
                <img src="/images/gg.png" className="w-full h-auto" alt="About Elias" />
                
                {/* Decorative Dots - Top Left */}
                <div className="absolute top-[59px] left-0 flex flex-col gap-4">
                  {[...Array(5)]?.map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-4">
                      {[...Array(5)]?.map((_, colIndex) => (
                        <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Decorative Dots - Bottom Right */}
                <div className="absolute bottom-[68px] right-0 flex flex-col gap-3">
                  {[...Array(4)]?.map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-6">
                      {[...Array(5)]?.map((_, colIndex) => (
                        <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Dots */}
          <div className="flex justify-end mt-16">
            <div className="flex flex-col gap-5 w-[40px] sm:w-[60px] lg:w-[80px]">
              {[...Array(5)]?.map((_, rowIndex) => (
                <div key={rowIndex} className="flex justify-between">
                  {[...Array(5)]?.map((_, colIndex) => (
                    <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contacts Section */}
        <div className="w-full max-w-[1366px] mx-auto px-4 py-16">
          {/* Left Decorative Dots */}
          <div className="flex flex-col gap-5 w-[26px] sm:w-[40px] lg:w-[52px] mb-8 lg:mb-0">
            {[...Array(5)]?.map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-5">
                {[...Array(5)]?.map((_, colIndex) => (
                  <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                ))}
              </div>
            ))}
          </div>

          <div className="w-full max-w-[1248px] mx-auto px-4 lg:px-14">
            {/* Section Header */}
            <div 
              ref={contactsHeaderRef}
              className={`flex items-center gap-4 mb-11 ${
                contactsHeaderVisible ? 'animate-fade-in-left' : 'opacity-0'
              }`}
            >
              <div className="flex items-center">
                <span className="text-[var(--text-accent)] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">#</span>
                <span className="text-[var(--text-primary)] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">contacts</span>
              </div>
              <div className="w-[63px] sm:w-[100px] lg:w-[126px] h-[1px] bg-[var(--text-accent)]"></div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              {/* Left Content */}
              <div className="lg:w-[48%]">
                <p className="text-[var(--text-secondary)] text-base font-medium leading-[20px] font-['Fira_Code']">
                  I am interested in freelance opportunities. However, if you have other request or question, do not hesitate to contact me
                </p>
              </div>

              {/* Right Content - Contact Box */}
              <div className="lg:w-[30%] border border-[var(--border-color)] p-2">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[var(--text-primary)] text-base font-semibold font-['Fira_Code']">Message me here</h3>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <img src="/images/linkedIn.svg" className="w-8 h-8" alt="LinkedIn" />
                      <span className="text-[var(--text-secondary)] text-base font-normal font-['Fira_Code']">Induma Withanage</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <img src="/images/img_email.svg" className="w-8 h-8" alt="Email" />
                      <span className="text-[var(--text-secondary)] text-base font-normal font-['Fira_Code']">indumawithanage1@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-[var(--border-color)] pt-8">
          <div className="w-full max-w-[1366px] mx-auto px-4 lg:px-[170px]">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
              {/* Left Footer Content */}
              <div className="lg:w-[34%]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src="/images/indw.png" className="w-12 h-12" alt="Logo" />
                    <span className="text-[var(--text-primary)] text-base font-medium font-['Fira_Code']">Induma</span>
                    <span className="text-[var(--text-secondary)] text-base font-normal font-['Fira_Code'] ml-6">indumawithanage1@gmail.com</span>
                  </div>
                  <p className="text-[var(--text-primary)] text-base font-normal font-['Fira_Code']">
                    Web designer and front-end developer
                  </p>
                </div>
              </div>

              {/* Right Footer Content */}
              <div className="lg:w-auto">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[var(--text-primary)] text-[20px] sm:text-[24px] font-medium font-['Fira_Code']">Media</h4>
                  <div className="flex gap-2">
                    <img src="/images/img_github.svg" className="w-8 h-8" alt="GitHub" />
                    <img src="/images/img_figma.svg" className="w-8 h-8" alt="Figma" />
                    <img src="/images/img_discord_blue_gray_200.svg" className="w-8 h-8" alt="Discord" />
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-[var(--text-secondary)] text-base font-normal font-['Fira_Code']">
                © Copyright 2025. Made by IndWit
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default AboutSection;