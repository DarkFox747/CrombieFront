import React from 'react';

const PerfilPage = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-4xl font-bold text-black text-center mb-8">Pepito Lopez</h1>
      <div className="flex flex-col items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo863cORq87akba36wNk4S6vj1d_OmopY3WA&s"
          alt="Perfil"
          className="w-48 h-48 object-cover rounded-full mb-4"
        />
        <p className="text-gray-700 text-center">
          Pancho lopez el crack
          Correo: paapa@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PerfilPage;