import React from 'react';

const InfiniteScroll = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 
    'Tailwind', 'Git', 'Figma', 'Python', 'MongoDB', 'Express'
  ];

  return (
    <div className="w-full overflow-hidden bg-[var(--bg-secondary)] py-4 border-y border-[var(--border-color)]">
      <div className="relative flex">
        {/* First scrolling group */}
        <div className="flex gap-8 animate-scroll-left whitespace-nowrap">
          {skills.map((skill, index) => (
            <div 
              key={`first-${index}`}
              className="flex items-center gap-2 px-6 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)]"
            >
              <span className="text-[var(--text-accent)] font-['Fira_Code']">#</span>
              <span className="text-[var(--text-secondary)] font-['Fira_Code'] text-sm sm:text-base">
                {skill}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 animate-scroll-left whitespace-nowrap ml-8" aria-hidden="true">
          {skills.map((skill, index) => (
            <div 
              key={`second-${index}`}
              className="flex items-center gap-2 px-6 py-2 border border-[var(--border-color)] bg-[var(--bg-primary)]"
            >
              <span className="text-[var(--text-accent)] font-['Fira_Code']">#</span>
              <span className="text-[var(--text-secondary)] font-['Fira_Code'] text-sm sm:text-base">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
