import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'medium',
  border = true,
  ...props 
}) => {
  const baseClasses = 'bg-background-main';
  const borderClass = border ? 'border border-border-primary' : '';
  
  const paddingClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6'
  };

  return (
    <div
      className={`${baseClasses} ${borderClass} ${paddingClasses?.[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;