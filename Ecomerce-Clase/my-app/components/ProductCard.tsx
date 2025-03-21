// app/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  onAddToCart: () => void;
}

export default function ProductCard({ name, description, price, imageUrl, onAddToCart }: ProductCardProps) {
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
      <p className="text-gray-600 mt-1">{description || 'Sin descripción'}</p>
      <p className="text-lg font-bold mt-2">${price}</p>
      <button
        onClick={onAddToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
}