import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full bg-[#1c2421]">
      <div className="w-full max-w-[1366px] mx-auto">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-[49px] bg-[#1c2421] border-r border-[#abb2bf] z-10 hidden lg:flex flex-col justify-between items-center py-4">
          <div className="w-[1px] h-[190px] bg-[#abb2bf]"></div>
          <div className="flex flex-col gap-2">
            <img src="/images/img_github.svg" className="w-8 h-8" alt="GitHub" />
            <img src="/images/img_dribble.svg" className="w-8 h-8" alt="Dribbble" />
            <img src="/images/img_figma.svg" className="w-8 h-8" alt="Figma" />
          </div>
        </div>

        {/* Header */}
        <header className="w-full bg-[#1c2421] border-b border-[#abb2bf] relative z-20">
          <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px]">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/images/img_union_white_a700.svg" className="w-4 h-4" alt="Logo" />
                <span className="text-white font-bold text-base font-['Fira_Code']">Elias</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-4">
                <div className="flex items-center">
                  <span className="text-[#c778dd] font-medium text-base font-['Fira_Code']">#</span>
                  <span className="text-white font-medium text-base font-['Fira_Code']">home</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#c778dd] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">works</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#c778dd] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">about-me</span>
                </div>
                <Link to="/contacts" className="flex items-center">
                  <span className="text-[#c778dd] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">contacts</span>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-[#abb2bf] font-semibold text-base font-['Fira_Code']">EN</span>
                  <img src="/images/img_group_58_blue_gray_200.svg" className="w-[10px] h-[5px]" alt="Language" />
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="w-5 h-0.5 bg-white mb-1"></span>
                  <span className="w-5 h-0.5 bg-white mb-1"></span>
                  <span className="w-5 h-0.5 bg-white"></span>
                </div>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <span className="text-[#c778dd] font-medium text-base font-['Fira_Code']">#</span>
                  <span className="text-white font-medium text-base font-['Fira_Code']">home</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#c778dd] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">works</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#c778dd] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">about-me</span>
                </div>
                <Link to="/contacts" className="flex items-center">
                  <span className="text-[#c778dd] font-normal text-base font-['Fira_Code']">#</span>
                  <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">contacts</span>
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px] py-8 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 lg:w-[46%]">
              <div className="flex flex-col gap-7">
                <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[26px] sm:leading-[31px] md:leading-[36px] lg:leading-[41px] text-white font-['Fira_Code']">
                  <span className="text-white">Elias is a </span>
                  <span className="text-[#c778dd]">web designer</span>
                  <span className="text-white"> and </span>
                  <span className="text-[#c778dd]">front-end developer</span>
                </h1>
                
                <p className="text-sm sm:text-base leading-[20px] sm:leading-[25px] text-[#abb2bf] font-['Fira_Code'] font-normal">
                  He crafts responsive websites where technologies meet creativity
                </p>
                
                <button className="border border-[#c778dd] px-4 py-2 text-white font-medium text-base font-['Fira_Code'] w-fit hover:bg-[#c778dd] hover:bg-opacity-10 transition-colors">
                  Contact me!!
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 lg:w-[54%] relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full max-w-[456px] mx-auto">
                  <img src="/images/img_image.png" className="w-full h-auto" alt="Elias" />
                  
                  {/* Logo Overlay */}
                  <div className="absolute top-[84px] left-1/2 transform -translate-x-1/2">
                    <img src="/images/img_logo.svg" className="w-[77px] sm:w-[100px] md:w-[130px] lg:w-[154px] h-auto" alt="Logo" />
                  </div>

                  {/* Decorative Dots */}
                  <div className="absolute bottom-14 right-4 flex flex-col gap-4">
                    {[...Array(5)]?.map((_, rowIndex) => (
                      <div key={rowIndex} className="flex gap-4">
                        {[...Array(5)]?.map((_, colIndex) => (
                          <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Box */}
                <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:left-8 border border-[#abb2bf] bg-[#1c2421] p-4 max-w-[400px]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#c778dd] border border-[#c778dd]"></div>
                    <span className="text-[#abb2bf] font-normal text-base font-['Fira_Code']">
                      <span className="font-medium">Currently working on </span>
                      <span className="font-semibold text-white">Portfolio</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px] py-8 lg:py-16">
          <div className="flex flex-col items-center gap-8">
            <div className="relative max-w-[712px] mx-auto">
              {/* Quote Icon Top */}
              <div className="absolute -top-4 left-2 bg-[#1c2421] p-1">
                <img src="/images/img_.svg" className="w-6 h-5" alt="Quote" />
              </div>
              
              {/* Quote Content */}
              <div className="border border-[#abb2bf] bg-[#1c2421] p-6 text-center">
                <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[24px] sm:leading-[28px] md:leading-[32px] text-[#fb1010] font-['Fira_Code']">
                  With great power comes great electricity bill
                </p>
              </div>
              
              {/* Author */}
              <div className="flex justify-end mt-4">
                <div className="relative">
                  <div className="absolute -top-3 right-4 bg-[#1c2421] p-1">
                    <img src="/images/img_.svg" className="w-6 h-5" alt="Quote" />
                  </div>
                  <div className="border border-[#abb2bf] px-3 py-2">
                    <span className="text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] text-[#fb1010] font-['Fira_Code']">
                      - Dr. Who
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Image */}
            <div className="self-end">
              <img src="/images/img_rectangle_26.png" className="w-[41px] sm:w-[60px] md:w-[82px] h-auto" alt="Decoration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;