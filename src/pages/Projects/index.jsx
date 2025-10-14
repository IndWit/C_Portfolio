import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects Showcase | Elias Portfolio - Web Developer & Designer</title>
        <meta name="description" content="Explore Elias's comprehensive portfolio of web development projects including Discord bots, React applications, and creative web solutions. View live demos and source code." />
        <meta property="og:title" content="Projects Showcase | Elias Portfolio - Web Developer & Designer" />
        <meta property="og:description" content="Explore Elias's comprehensive portfolio of web development projects including Discord bots, React applications, and creative web solutions. View live demos and source code." />
      </Helmet>
      <div className="w-full bg-[#1c2421] min-h-screen">
        <Header />
        
        <main className="w-full">
          {/* Page Header Section */}
          <section className="w-full px-4 sm:px-6 lg:px-[56px] pt-[52px] pb-[42px]">
            <div className="w-full max-w-[1440px] mx-auto">
              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-row items-center">
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#c778dd] font-['Fira_Code']">
                    /
                  </span>
                  <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#ffffff] font-['Fira_Code']">
                    projects
                  </span>
                </div>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[18px] sm:leading-[20px] md:leading-[21px] text-[#ffffff] font-['Fira_Code']">
                  List of my projects
                </p>
              </div>
            </div>
          </section>

          {/* Left Sidebar with Decorative Elements */}
          <div className="fixed left-0 top-[190px] hidden lg:flex flex-col items-center gap-[8px] z-10">
            <div className="w-[1px] h-[190px] bg-[#abb2bf]"></div>
            <div className="flex flex-col gap-[8px] items-center">
              <img src="/images/img_github.svg" alt="GitHub" className="w-[32px] h-[32px]" />
              <img src="/images/img_dribble.svg" alt="Dribbble" className="w-[32px] h-[32px]" />
              <img src="/images/img_figma.svg" alt="Figma" className="w-[32px] h-[32px]" />
            </div>
          </div>

          {/* Decorative Dots Pattern - Left */}
          <div className="fixed left-0 top-[401px] hidden lg:block z-0">
            <div className="flex flex-col gap-[15px]">
              {[...Array(5)]?.map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-[22px]">
                  {[...Array(5)]?.map((_, colIndex) => (
                    <div key={colIndex} className="w-[4px] h-[4px] bg-[#abb2bf] rounded-[2px]"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full px-4 sm:px-6 lg:px-[78px] pb-[42px]">
            <div className="w-full max-w-[1440px] mx-auto">
              <div className="flex flex-col gap-[48px]">
                
                {/* Complete Apps Section */}
                <div className="flex flex-col gap-[48px]">
                  <div className="flex flex-row items-center">
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#c778dd] font-['Fira_Code']">
                      #
                    </span>
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#ffffff] font-['Fira_Code']">
                      complete-apps
                    </span>
                  </div>

                  {/* Complete Apps Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* ChertNodes Project */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <img src="/images/img_rectangle_22.png" alt="ChertNodes" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">HTML</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">SCSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Python</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Flask</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          ChertNodes
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">
                          Minecraft servers hosting
                        </p>
                        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[16px]">
                          <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors">
                            Live &lt;~&gt;
                          </button>
                          <button className="px-[16px] py-[8px] border border-[#abb2bf] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code'] hover:bg-[#abb2bf] hover:text-[#1c2421] transition-colors">
                            Cached &gt;=
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Kahoot Answers Viewer Project */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <img src="/images/img_rectangle_22_1.png" alt="Kahoot Answers Viewer" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">CSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Express</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Node.js</span>
                        </div>
                      </div>
                      <div className="p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[31px] text-[#ffffff] font-['Fira_Code']">
                          Kahoot Answers Viewer
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">
                          Get answers to your kahoot quiz
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* ProtectX Project */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <img src="/images/img_rectangle_22_200x330.png" alt="ProtectX" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center justify-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">React</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Express</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Discord.js</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Node.js</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          ProtectX
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">
                          Discord anti-crash bot
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#abb2bf] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code'] hover:bg-[#abb2bf] hover:text-[#1c2421] transition-colors w-fit">
                          Cached &gt;=
                        </button>
                      </div>
                    </div>

                    {/* Kotik Bot Project */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <img src="/images/img_rectangle_22_2.png" alt="Kotik Bot" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">HTML</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">CSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">JS</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          Kotik Bot
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">
                          Multi-functional discord bot
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Portfolio Project */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <img src="/images/img_rectangle_22_3.png" alt="Portfolio" className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover" />
                      <div className="p-[8px] border-t border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Vue</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">TS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Less</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          Portfolio
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">
                          You are using it rn
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Projects Section */}
                <div className="flex flex-col gap-[48px]">
                  <div className="flex flex-row items-center">
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#c778dd] font-['Fira_Code']">
                      #
                    </span>
                    <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#ffffff] font-['Fira_Code']">
                      small-projects
                    </span>
                  </div>

                  {/* Small Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* Bot Boilerplate */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Discord.js</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">TS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">JS</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[12px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          Bot boilerplate
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Start creating scalable discord.js bot with typescript in seconds
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* My Blog */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">VUE</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">CSS</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">JS</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[12px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          My blog
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Front-end of my future blog website written in vue
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Chess Pro */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Figma</span>
                        </div>
                      </div>
                      <div className="p-[16px] border-t border-[#abb2bf] flex flex-col gap-[12px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          Chess pro
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Figma landing page about service for viewing chess tournaments
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Figma &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Crash Protect Website */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Figma</span>
                        </div>
                      </div>
                      <div className="p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[31px] text-[#ffffff] font-['Fira_Code']">
                          Crash protect website
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Figma template for website about anti-raid, anti-crash discord bot
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Figma &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* CSS Experiments */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">HTML</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">CSS</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          CSS expirements
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Collection of my different little projects in css
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Web Dev nvim config */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Lua</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">NeoVim</span>
                        </div>
                      </div>
                      <div className="p-[14px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          Web Dev nvim config
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Config for neovim perfect for web developer
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Github &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* Ooku */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Python</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Quart</span>
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">HTML</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          Ooku
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">
                          Simple link shortener with auth
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Live &lt;~&gt;
                        </button>
                      </div>
                    </div>

                    {/* School Website */}
                    <div className="border border-[#abb2bf] flex flex-col">
                      <div className="p-[8px] border-b border-[#abb2bf]">
                        <div className="flex flex-row flex-wrap gap-[8px] items-center">
                          <span className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-[#abb2bf] font-['Fira_Code']">Figma</span>
                        </div>
                      </div>
                      <div className="p-[12px] sm:p-[16px] border-t border-[#abb2bf] flex flex-col gap-[14px]">
                        <h3 className="text-[20px] sm:text-[24px] font-medium leading-[26px] sm:leading-[32px] text-[#ffffff] font-['Fira_Code']">
                          School website
                        </h3>
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-[#abb2bf] font-['Fira_Code']">
                          Figma template website for my school
                        </p>
                        <button className="px-[16px] py-[8px] border border-[#c778dd] text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#ffffff] font-['Fira_Code'] hover:bg-[#c778dd] hover:text-[#1c2421] transition-colors w-fit">
                          Figma &lt;~&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Decorative Image */}
          <div className="fixed right-0 top-[256px] hidden lg:block z-0">
            <img src="/images/img_rectangle_25_154x68_1.png" alt="Decorative" className="w-[68px] h-[154px] object-cover" />
          </div>

          {/* Bottom Decorative Elements */}
          <div className="w-full relative">
            <img src="/images/img_rectangle_25_154x78_1.png" alt="Decorative" className="w-[78px] h-[154px] object-cover" />
            
            {/* Right Bottom Decorative Dots */}
            <div className="absolute right-0 bottom-[169px] hidden lg:block">
              <div className="flex flex-col gap-[20px]">
                {[...Array(5)]?.map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-row gap-[22px] justify-between">
                    {[...Array(5)]?.map((_, colIndex) => (
                      <div key={colIndex} className="w-[4px] h-[4px] bg-[#abb2bf] rounded-[2px]"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Left Bottom Decorative Dots */}
            <div className="absolute left-0 bottom-[0px] hidden lg:block">
              <div className="flex flex-col gap-[20px]">
                {[...Array(5)]?.map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-row gap-[20px]">
                    {[...Array(5)]?.map((_, colIndex) => (
                      <div key={colIndex} className="w-[4px] h-[4px] bg-[#abb2bf] rounded-[2px]"></div>
                    ))}
                  </div>
                ))}
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