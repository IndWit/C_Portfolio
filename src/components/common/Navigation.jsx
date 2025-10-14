import React, { useState } from 'react';

const Navigation = ({ activeItem = 'home' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'home', href: '/' },
    { id: 'works', label: 'works', href: '/works' },
    { id: 'about-me', label: 'about-me', href: '/about' },
    { id: 'contacts', label: 'contacts', href: '/contacts' }
  ];

  return (
    <>
      {/* Hamburger Menu Icon (Mobile only) */}
      <button 
        className="block lg:hidden p-2 text-text-primary" 
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Navigation Menu */}
      <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-header-background lg:bg-transparent z-50 lg:z-auto`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 p-4 lg:p-0">
          {menuItems?.map((item, index) => (
            <div 
              key={item?.id}
              className={`flex items-center mb-4 lg:mb-0 cursor-pointer hover:opacity-80 transition-opacity ${
                index === 0 ? 'lg:mr-16' : 'lg:mr-4'
              }`}
            >
              <span className={`text-base leading-sm ${
                activeItem === item?.id 
                  ? 'font-medium text-text-secondary' :'font-normal text-text-secondary'
              }`}>
                #
              </span>
              <span className={`text-base leading-sm ${
                activeItem === item?.id 
                  ? 'font-medium text-text-accent' :'font-normal text-text-primary'
              }`}>
                {item?.label}
              </span>
            </div>
          ))}

          {/* Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-base font-semibold leading-sm text-text-primary">EN</span>
            <img 
              src="/images/img_group_58.svg" 
              alt="Language dropdown" 
              className="w-[10px] h-[5px]"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;