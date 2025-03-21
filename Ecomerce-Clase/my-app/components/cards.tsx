import React from 'react';
import Button from './buttons';

interface CardProps {
  imageSrc: string;
  description: string;
  buttonText: string;
  title?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, description, buttonText,title, onButtonClick }) => {
  return (
    <div className="border rounded shadow-lg p-4">
        <h3 className="text-xl font-bold text-black">{title}</h3>
      <img src={imageSrc} alt="Card Image" className="w-full h-48 object-cover rounded" />
      <p className="mt-4 text-gray-700">{description}</p>
      <Button title={buttonText} onClick={onButtonClick} />
    </div>
  );
};

export default Card;