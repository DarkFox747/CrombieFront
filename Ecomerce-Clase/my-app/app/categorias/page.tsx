"use client"
import React from 'react';
import Card from '../../components/cards';

const CategoriasPage = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Categorías</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
        title="Categoria 1"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn9SkdAwVYIvP4OXc_d2f7RRvz43k1rnGwg&s"
          description="Categoria 1 - PAPITAS."
          buttonText="Ir"
          onButtonClick={() => alert('Categoria 1 agregado al carrito!')}
        />
        <Card
        title="Categoria 1"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSp-5_AWe1z_nUUe_xdjmRZBHrKJUV5YNofA&s"
          description="Categoria 2 - Descripción del Categoria."
          buttonText="Ir"
          onButtonClick={() => alert('Categoria 2 agregado al carrito!')}
        />
        <Card
        title="Categoria 1"
          imageSrc="https://okdiario.com/img/2023/04/12/el-truco-definitivo-para-que-las-patatas-fritas-te-queden-mas-crujientes.jpg"
          description="Categoria 3 - Descripción del Categoria."
          buttonText="IR"
          onButtonClick={() => alert('Categoria 3 agregado al carrito!')}
        />
      </div>
    </div>
  );
};

export default CategoriasPage;