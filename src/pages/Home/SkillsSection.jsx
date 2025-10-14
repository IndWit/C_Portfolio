import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        ["TypeScript", "Lua"],
        ["Python", "JavaScript"]
      ]
    },
    {
      title: "Databases", 
      skills: [
        ["SQLite", "PostgreSQL"],
        ["Mongo"]
      ]
    },
    {
      title: "Other",
      skills: [
        ["HTML", "CSS", "EJS", "SCSS"],
        ["REST", "Jinja"]
      ]
    },
    {
      title: "Tools",
      skills: [
        ["VSCode", "Neovim", "Linux"],
        ["Figma", "XFCE", "Arch"],
        ["Git", "Font Awesome"]
      ]
    },
    {
      title: "Frameworks",
      skills: [
        ["React", "Vue"],
        ["Disnake", "Discord.js"],
        ["Flask", "Express.js"]
      ]
    }
  ];

  return (
    <section className="w-full bg-[#1c2421] py-8 lg:py-16">
      <div className="w-full max-w-[1366px] mx-auto px-4 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-8">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center">
              <span className="text-[#c778dd] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">#</span>
              <span className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">skills</span>
            </div>
            <div className="flex-1 lg:w-[238px] h-[1px] bg-[#c778dd]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side - Decorative Elements */}
          <div className="lg:w-[32%] flex flex-col items-center lg:items-start gap-8">
            {/* Decorative Dots Pattern 1 */}
            <div className="flex flex-col gap-2 self-end lg:self-auto">
              {[...Array(5)]?.map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-2">
                  {[...Array(5)]?.map((_, colIndex) => (
                    <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Large Logo and Decorative Dots */}
            <div className="flex items-start gap-8">
              <div className="flex flex-col gap-8">
                <img src="/images/img_logo.svg" className="w-[56px] sm:w-[80px] lg:w-[112px] h-auto self-end" alt="Logo" />
                
                {/* Decorative Dots Pattern 2 */}
                <div className="flex flex-col gap-2">
                  {[...Array(5)]?.map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-2">
                      {[...Array(5)]?.map((_, colIndex) => (
                        <div key={colIndex} className="w-1 h-1 bg-[#abb2bf] rounded-sm"></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Border Box */}
              <div className="w-[26px] sm:w-[40px] lg:w-[52px] h-[26px] sm:h-[40px] lg:h-[52px] border border-[#abb2bf] self-end"></div>
            </div>

            {/* Border Box */}
            <div className="w-[43px] sm:w-[65px] lg:w-[86px] h-[43px] sm:h-[65px] lg:h-[86px] border border-[#abb2bf]"></div>
          </div>

          {/* Right Side - Skills Grid */}
          <div className="lg:w-[68%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Languages */}
              <div className="border border-[#abb2bf] bg-[#1c2421]">
                <div className="p-2 border-b border-[#abb2bf]">
                  <h3 className="text-white text-base font-semibold font-['Fira_Code']">Languages</h3>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">TypeScript</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Lua</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Python</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="border border-[#abb2bf] bg-[#1c2421]">
                <div className="p-2 border-b border-[#abb2bf]">
                  <h3 className="text-white text-base font-semibold font-['Fira_Code']">Databases</h3>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">SQLite</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">PostgreSQL</span>
                    </div>
                    <div>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Mongo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="border border-[#abb2bf] bg-[#1c2421] sm:col-span-2 lg:col-span-1">
                <div className="p-2 border-b border-[#abb2bf]">
                  <h3 className="text-white text-base font-semibold font-['Fira_Code']">Tools</h3>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">VSCode</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Neovim</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Linux</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Figma</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">XFCE</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Arch</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Git</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Font Awesome</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other */}
              <div className="border border-[#abb2bf] bg-[#1c2421] sm:col-span-1 lg:col-span-2">
                <div className="p-2 border-b border-[#abb2bf]">
                  <h3 className="text-white text-base font-semibold font-['Fira_Code']">Other</h3>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">HTML</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">CSS</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">EJS</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">SCSS</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">REST</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Jinja</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks */}
              <div className="border border-[#abb2bf] bg-[#1c2421] sm:col-span-2 lg:col-span-1">
                <div className="p-2 border-b border-[#abb2bf]">
                  <h3 className="text-white text-base font-semibold font-['Fira_Code']">Frameworks</h3>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">React</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Vue</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Disnake</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Discord.js</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Flask</span>
                      <span className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">Express.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;