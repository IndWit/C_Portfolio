import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false, 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-accent text-text-accent hover:opacity-80 focus:ring-primary-accent',
    outline: 'border border-border-primary text-text-primary hover:bg-secondary-background hover:text-secondary-foreground focus:ring-border-primary',
    secondary: 'bg-secondary-background text-secondary-foreground hover:opacity-80 focus:ring-secondary-background'
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${variants?.[variant]} ${sizes?.[size]} ${widthClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;