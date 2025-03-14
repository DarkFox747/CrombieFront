// app/products/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/ProductCard';
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category: { id: number; name: string };
  imageUrl?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const limit = 6;
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const url = `/api/productos?page=${page}&limit=${limit}${
          search ? `&search=${encodeURIComponent(search)}` : ''
        }${categoryId ? `&categoryId=${categoryId}` : ''}`;
        const res = await fetch(url);
        const { data, pagination } = await res.json();
        setProducts(data || []);
        setTotalPages(pagination.totalPages || 1);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [page, search, categoryId]); // Dependencia adicional: categoryId

  const handleAddToCart = (productId: number) => {
    console.log(`Producto ${productId} agregado al carrito`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Productos {categoryId ? `en Categoría ${categoryId}` : ''}</h1>
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Buscar productos por nombre..."
      />
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No se encontraron productos.</p>
      )}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}