import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'adaptive';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', isLoading, className = '', disabled, ...props }) => {
  const bs = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const v = {
    primary: "border-transparent text-white bg-blue-900 hover:bg-blue-800 focus:ring-blue-900",
    secondary: "border-transparent text-white bg-red-500 hover:bg-red-600 focus:ring-red-500",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500",
    ghost: "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    white: "border-transparent text-black bg-white hover:bg-gray-200 focus:ring-gray-200",
    adaptive: "border-transparent text-white bg-red-500 hover:bg-red-600 focus:ring-red-500"
  };
  return (
    <button className={`${bs} ${v[variant]} ${className}`} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Procesando...
        </>
      ) : children}
    </button>
  );
};

export default Button;