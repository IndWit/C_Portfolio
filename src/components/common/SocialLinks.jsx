import React from 'react';

const SocialLinks = ({ 
  links = [],
  orientation = 'horizontal',
  showLabels = true,
  className = ''
}) => {
  const defaultLinks = [
    { id: 'github', src: '/images/img_github.svg', label: '@elias', alt: 'GitHub' },
    { id: 'figma', src: '/images/img_figma.svg', label: '@elias', alt: 'Figma' },
    { id: 'discord', src: '/images/img_discord.svg', label: 'Elias#1234', alt: 'Discord' }
  ];

  const socialLinks = links?.length > 0 ? links : defaultLinks;
  const containerClass = orientation === 'vertical' ? 'flex flex-col gap-2' : 'flex flex-row gap-2';

  return (
    <div className={`${containerClass} ${className}`}>
      {socialLinks?.map((link) => (
        <div key={link?.id} className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src={link?.src} 
            alt={link?.alt}
            className="w-[32px] h-[32px]"
          />
          {showLabels && (
            <span className="text-base font-normal leading-sm text-text-primary ml-1">
              {link?.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;