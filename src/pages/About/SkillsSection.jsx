import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SkillsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        ['TypeScript', 'Lua'],
        ['Python', 'JavaScript']
      ]
    },
    {
      title: 'Other',
      skills: [
        ['HTML', 'CSS', 'EJS', 'SCSS'],
        ['REST', 'Jinja']
      ]
    },
    {
      title: 'Tools',
      skills: [
        ['VSCode', 'Neovim', 'Linux'],
        ['Figma', 'XFCE', 'Arch'],
        ['Git', 'Font Awesome'],
        ['KDE', 'fish']
      ]
    },
    {
      title: 'Databases',
      skills: [
        ['SQLite', 'PostgreSQL'],
        ['Mongo']
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        ['React', 'Vue'],
        ['Disnake', 'Discord.js'],
        ['Flask', 'Express.js']
      ]
    }
  ];

  return (
    <section className="w-full bg-[var(--bg-primary)] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px]">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`flex items-center gap-2 mb-8 sm:mb-12 ${
            headerVisible ? 'animate-fade-in-left' : 'opacity-0'
          }`}
        >
          <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-accent)] font-['Fira_Code']">#</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-primary)] font-['Fira_Code']">skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {skillCategories?.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="border border-[var(--border-color)]"
            >
              {/* Category Header */}
              <div className="px-2 py-2 border-b border-[var(--border-color)]">
                <h3 className="text-base font-semibold text-[var(--text-primary)] font-['Fira_Code']">
                  {category?.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="px-2 py-2 space-y-2">
                {category?.skills?.map((skillRow, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-2">
                    {skillRow?.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-sm text-[var(--text-secondary)] font-['Fira_Code']"
                      >
                        {skill}
                        {skillIndex < skillRow?.length - 1 && (
                          <span className="ml-2 text-[var(--text-secondary)]">•</span>
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Dots - Right Side */}
        <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-5 gap-5">
            {Array.from({ length: 25 })?.map((_, index) => (
              <div 
                key={index}
                className="w-1 h-1 bg-[#abb2bf] rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
