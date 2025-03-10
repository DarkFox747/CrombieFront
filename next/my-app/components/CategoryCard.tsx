// app/components/CategoryCard.tsx
import React from 'react';

interface CategoryCardProps {
  name: string;
  id: number;
  imageUrl?: string;
  onViewProducts: () => void;
}

export default function CategoryCard({ name, id, imageUrl, onViewProducts }: CategoryCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs bg-white">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span className="text-gray-500">Sin imagen</span>
        </div>
      )}
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600 mt-1">ID: {id}</p>
      <button
        onClick={onViewProducts}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Ver productos
      </button>
    </div>
  );
}