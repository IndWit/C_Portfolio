import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SkillsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  
  const skillCategories = [
  {
    title: "Languages",
    skills: [
      ["Java", "Go", "PHP"],
      ["Python", "Dart", "JavaScript"]
    ]
  },
  {
    title: "Frameworks",
    skills: [
      ["ReactJS", "Laravel"],
      ["Next.js"]
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      ["HTML", "CSS", "Bootstrap"],
      ["Firebase"]
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      ["Flutter"]
    ]
  },
  {
    title: "Database Management",
    skills: [
      ["SQL Server", "MySQL"],
      ["MongoDB"]
    ]
  },
  {
    title: "Design Tools",
    skills: [
      ["Figma", "Adobe XD"],
      ["Photoshop"]
    ]
  },
  {
    title: "Version Control",
    skills: [
      ["Git"]
    ]
  },
  
];



  return (
    <section className="w-full bg-[var(--bg-primary)] py-8 lg:py-16">
      <div className="w-full max-w-[1366px] mx-auto px-4 lg:px-14">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col lg:flex-row justify-between items-start gap-4 mb-8 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center">
              <span className="text-[var(--text-accent)] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">#</span>
              <span className="text-[var(--text-primary)] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">skills</span>
            </div>
            <div className="flex-1 lg:w-[238px] h-[1px] bg-[var(--text-accent)]"></div>
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
                    <div key={colIndex} className="w-1 h-1 bg-[var(--border-color)] rounded-sm"></div>
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
                        <div key={colIndex} className="w-1 h-1 bg-[var(--border-color)] rounded-sm"></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Border Box */}
              <div className="w-[26px] sm:w-[40px] lg:w-[52px] h-[26px] sm:h-[40px] lg:h-[52px] border border-[var(--border-color)] self-end"></div>
            </div>

            {/* Border Box */}
            <div className="w-[43px] sm:w-[65px] lg:w-[86px] h-[43px] sm:h-[65px] lg:h-[86px] border border-[var(--border-color)]"></div>
          </div>

          {/* Right Side - Skills Grid (Dynamic from skillCategories) */}
          <div className="lg:w-[68%]" ref={gridRef}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${gridVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {skillCategories.map((category) => (
                <div key={category.title} className="border border-[var(--border-color)] bg-[var(--bg-primary)]">
                  <div className="p-2 border-b border-[var(--border-color)]">
                    <h3 className="text-[var(--text-primary)] text-base font-semibold font-['Fira_Code']">{category.title}</h3>
                  </div>
                  <div className="p-2">
                    <div className="flex flex-col gap-2">
                      {category.skills.map((row, idx) => (
                        <div key={idx} className="flex flex-wrap gap-2">
                          {row.map((skill) => (
                            <span key={skill} className="text-[var(--text-secondary)] text-base font-normal font-['Fira_Code']">{skill}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;