import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SocialMedia = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Section Title */}
      <div 
        ref={headerRef}
        className={`flex items-center gap-0 mt-22 ${
          headerVisible ? 'animate-fade-in-left' : 'opacity-0'
        }`}
      >
        <span className="text-xl font-medium leading-xl text-[var(--text-accent)] font-['Fira_Code']">#</span>
        <span className="text-xl font-medium leading-xl text-[var(--text-primary)] font-['Fira_Code']">all-media</span>
      </div>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-5">
        {/* Twitter Link 1 */}
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src="/images/img_twitter.svg" 
            alt="Twitter" 
            className="w-[32px] h-[32px]"
          />
          <span className="text-base font-normal leading-sm text-[var(--text-secondary)] ml-1 font-['Fira_Code']">
            @elias
          </span>
        </div>

        {/* Twitter Link 2 */}
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity px-[10px]">
          <img 
            src="/images/img_twitter.svg" 
            alt="Twitter" 
            className="w-[32px] h-[32px]"
          />
          <span className="text-base font-normal leading-sm text-[var(--text-secondary)] ml-1 font-['Fira_Code']">
            @elias
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
