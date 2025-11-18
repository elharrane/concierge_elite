import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gold-600 border border-transparent hover:shadow-lg",
    outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
    white: "bg-white text-black hover:bg-neutral-200 border border-transparent shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};