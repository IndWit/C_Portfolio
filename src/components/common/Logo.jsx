import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <img 
        src="/images/img_header_logo.png" 
        alt="Elias Portfolio Logo" 
        className="w-[72px] h-[20px]"
      />
    </div>
  );
};

export default Logo;