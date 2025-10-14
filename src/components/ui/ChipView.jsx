import React from 'react';

const ChipView = ({ 
  items = [],
  variant = 'default',
  size = 'medium',
  className = '',
  onItemClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center border transition-all duration-200';
  
  const variants = {
    default: 'border-border-primary text-text-primary',
    accent: 'border-border-accent text-text-secondary'
  };

  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-2 py-1.5 text-base',
    large: 'px-3 py-2 text-lg'
  };

  if (!items?.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} {...props}>
      {items?.map((item, index) => (
        <div
          key={index}
          className={`${baseClasses} ${variants?.[variant]} ${sizes?.[size]} cursor-pointer hover:opacity-80`}
          onClick={() => onItemClick?.(item, index)}
        >
          {typeof item === 'string' ? item : item?.label || item?.name}
        </div>
      ))}
    </div>
  );
};

export default ChipView;