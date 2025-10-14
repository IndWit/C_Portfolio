import React from 'react';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'w-full px-3 py-2 border border-border-primary bg-background-main text-text-accent placeholder-text-primary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseClasses} ${disabledClass} ${className}`}
      {...props}
    />
  );
};

export default Input;