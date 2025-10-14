import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-bg-header-background py-2">
      <div className="w-full max-w-[1026px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mt-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img 
                src="/images/img_header_logo.png" 
                alt="Elias Portfolio Logo" 
                className="w-[72px] h-[20px]"
              />
            </NavLink>
          </div>

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
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-bg-header-background lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 p-4 lg:p-0">
              {/* Home */}
              <NavLink 
                to="/" 
                className="flex items-center mb-4 lg:mb-0 lg:mr-16 hover:opacity-80 transition-opacity" 
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base font-medium leading-sm text-text-secondary">#</span>
                    <span className={isActive ? "text-base font-medium leading-sm text-text-accent" : "text-base font-normal leading-sm text-text-primary"}>
                      home
                    </span>
                  </>
                )}
              </NavLink>

              {/* Works */}
              <NavLink 
                to="/projects" 
                className="flex items-center mb-4 lg:mb-0 lg:mr-4 cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base font-normal leading-sm text-text-secondary">#</span>
                    <span className={isActive ? "text-base font-medium leading-sm text-text-accent" : "text-base font-normal leading-sm text-text-primary"}>
                      works
                    </span>
                  </>
                )}
              </NavLink>

              {/* About Me */}
              <NavLink 
                to="/about" 
                className="flex items-center mb-4 lg:mb-0 lg:mr-4 cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base font-normal leading-sm text-text-secondary">#</span>
                    <span className={isActive ? "text-base font-medium leading-sm text-text-accent" : "text-base font-normal leading-sm text-text-primary"}>
                      about-me
                    </span>
                  </>
                )}
              </NavLink>

              {/* Contacts */}
              <NavLink 
                to="/contact" 
                className="flex items-center mb-4 lg:mb-0 lg:mr-4 cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    <span className="text-base font-normal leading-sm text-text-secondary">#</span>
                    <span className={isActive ? "text-base font-medium leading-sm text-text-accent" : "text-base font-normal leading-sm text-text-primary"}>
                      contacts
                    </span>
                  </>
                )}
              </NavLink>

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
        </div>
      </div>
    </header>
  );
};

export default Header;