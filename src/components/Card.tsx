// src/components/Card.tsx
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  date: string;
  entryUrl: string; // Use a generic URL prop
}

const Card: React.FC<CardProps> = ({ imageUrl, title, date, entryUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <a href={entryUrl} className="block">
        <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 truncate">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{date}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
