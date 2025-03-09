import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;