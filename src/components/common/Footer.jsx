import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="w-full bg-background-main">
      {/* Horizontal Line */}
      <div className="w-full h-[1px] bg-line-background"></div>
      
      <div className="w-full max-w-[1026px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 mb-12">
          {/* Left Section - Logo and Contact */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/img_union.svg" 
                  alt="Logo icon" 
                  className="w-[16px] h-[16px]"
                />
                <span className="text-base font-medium leading-sm text-text-accent ml-2">
                  Elias
                </span>
              </div>
              <span className="text-base font-normal leading-sm text-text-primary">
                elias@elias-dev.ml
              </span>
            </div>
            <p className="text-base font-normal leading-sm text-text-accent">
              Web designer and front-end developer
            </p>
          </div>

          {/* Right Section - Media */}
          <div className="flex flex-col gap-3 items-start lg:items-end">
            <h3 className="text-lg font-medium leading-lg text-text-accent">
              Media
            </h3>
            <SocialLinks 
              links={[
                { id: 'github', src: '/images/img_github.svg', label: '', alt: 'GitHub' },
                { id: 'figma', src: '/images/img_figma.svg', label: '', alt: 'Figma' },
                { id: 'discord', src: '/images/img_discord_blue_gray_200.svg', label: '', alt: 'Discord' }
              ]}
              showLabels={false}
              className="gap-2"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-base font-normal leading-sm text-text-primary">
            © Copyright 2022. Made by Elias
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;