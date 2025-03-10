// app/components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        Anterior
      </button>
      <span className="px-4 py-2">Página {page} de {totalPages}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        Siguiente
      </button>
    </div>
  );
}