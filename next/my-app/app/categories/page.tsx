// app/categories/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CategoryCard from '../../components/CategoryCard';
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';

interface Category {
  id: number;
  name: string;
  products: { id: number }[];
  imageUrl?: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchId, setSearchId] = useState('');
  const [loading, setLoading] = useState(false);
  const limit = 6; // Categorías por página
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const res = await fetch(`/api/categorias?page=${page}&limit=${limit}`);
        const { data, pagination } = await res.json();
        const filteredCategories = searchId
          ? data.filter((cat: Category) => cat.id.toString() === searchId)
          : data;
        setCategories(filteredCategories || []);
        setTotalPages(searchId ? 1 : pagination.totalPages || 1); // Si hay filtro, solo 1 página
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, [page, searchId]);

  const handleViewProducts = (categoryId: number) => {
    router.push(`/products?categoryId=${categoryId}`);
    // Esto asume que más adelante podrías filtrar productos por categoría
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Categorías</h1>
      <SearchInput
        value={searchId}
        onChange={setSearchId}
        placeholder="Buscar categoría por ID..."
      />
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              id={category.id}
              imageUrl={category.imageUrl}
              onViewProducts={() => handleViewProducts(category.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No se encontraron categorías.</p>
      )}
      {!searchId && (
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
}