import React from 'react';

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Section Title */}
      <div className="flex items-center gap-0 mt-22">
        <span className="text-xl font-medium leading-xl text-text-secondary">#</span>
        <span className="text-xl font-medium leading-xl text-text-accent">all-media</span>
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
          <span className="text-base font-normal leading-sm text-text-primary ml-1">
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
          <span className="text-base font-normal leading-sm text-text-primary ml-1">
            @elias
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;