"use client"
import React from 'react';
import Card from '../../components/cards';

const ProductoPage = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
        title="Producto 1"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn9SkdAwVYIvP4OXc_d2f7RRvz43k1rnGwg&s"
          description="Producto 1 - PAPITAS."
          buttonText="Comprar"
          onButtonClick={() => alert('Producto 1 agregado al carrito!')}
        />
        <Card
        title="Producto 2"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSp-5_AWe1z_nUUe_xdjmRZBHrKJUV5YNofA&s"
          description="Producto 2 - Descripción del producto."
          buttonText="Comprar"
          onButtonClick={() => alert('Producto 2 agregado al carrito!')}
        />
        <Card
        title="Producto 3"
          imageSrc="https://okdiario.com/img/2023/04/12/el-truco-definitivo-para-que-las-patatas-fritas-te-queden-mas-crujientes.jpg"
          description="Producto 3 - Descripción del producto."
          buttonText="Comprar"
          onButtonClick={() => alert('Producto 3 agregado al carrito!')}
        />
      </div>
    </div>
  );
};

export default ProductoPage;