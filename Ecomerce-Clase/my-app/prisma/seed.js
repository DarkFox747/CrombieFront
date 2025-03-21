// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//$ npm run prisma:seed

async function main() {
  // Limpiar la base de datos (opcional, para empezar de cero)
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Insertar usuarios
  await prisma.user.createMany({
    data: [
      { email: 'admin@example.com', name: 'Admin User', password: 'admin123' },
      { email: 'user1@example.com', name: 'John Doe', password: 'pass123' },
      { email: 'user2@example.com', name: 'Jane Smith', password: 'pass456' },
    ],
  });

  // Insertar categorías
  await prisma.category.createMany({
    data: [
      { name: 'Electrónica' },
      { name: 'Ropa' },
      { name: 'Hogar' },
      { name: 'Juguetes' },
      { name: 'Libros' },
    ],
  });

  // Obtener las categorías creadas para asociar productos
  const categories = await prisma.category.findMany();

  // Insertar productos
  await prisma.product.createMany({
    data: [
      {
        name: 'Smartphone',
        description: 'Teléfono inteligente de última generación',
        price: 699,
        stock: 50,
        categoryID: categories.find((c) => c.name === 'Electrónica').id,
      },
      {
        name: 'Camiseta',
        description: 'Camiseta de algodón 100%',
        price: 25,
        stock: 100,
        categoryID: categories.find((c) => c.name === 'Ropa').id,
      },
      {
        name: 'Lámpara',
        description: 'Lámpara de mesa moderna',
        price: 45,
        stock: 30,
        categoryID: categories.find((c) => c.name === 'Hogar').id,
      },
      {
        name: 'Laptop',
        description: 'Laptop de alto rendimiento',
        price: 1200,
        stock: 20,
        categoryID: categories.find((c) => c.name === 'Electrónica').id,
      },
      {
        name: 'Pantalones',
        description: 'Pantalones de mezclilla',
        price: 40,
        stock: 60,
        categoryID: categories.find((c) => c.name === 'Ropa').id,
      },
      {
        name: 'Silla',
        description: 'Silla ergonómica de oficina',
        price: 150,
        stock: 15,
        categoryID: categories.find((c) => c.name === 'Hogar').id,
      },
      {
        name: 'Tablet',
        description: 'Tablet con pantalla de 10 pulgadas',
        price: 300,
        stock: 35,
        categoryID: categories.find((c) => c.name === 'Electrónica').id,
      },
      {
        name: 'Zapatos',
        description: 'Zapatos deportivos',
        price: 60,
        stock: 80,
        categoryID: categories.find((c) => c.name === 'Ropa').id,
      },
      {
        name: 'Escritorio',
        description: 'Escritorio de madera',
        price: 200,
        stock: 10,
        categoryID: categories.find((c) => c.name === 'Hogar').id,
      },
      {
        name: 'Cámara',
        description: 'Cámara digital',
        price: 500,
        stock: 25,
        categoryID: categories.find((c) => c.name === 'Electrónica').id,
      },
      {
        name: 'Juguete de construcción',
        description: 'Juguete de bloques de construcción',
        price: 30,
        stock: 70,
        categoryID: categories.find((c) => c.name === 'Juguetes').id,
      },
      {
        name: 'Libro de cocina',
        description: 'Libro de recetas de cocina',
        price: 20,
        stock: 40,
        categoryID: categories.find((c) => c.name === 'Libros').id,
      },
      {
        name: 'Auriculares',
        description: 'Auriculares inalámbricos',
        price: 100,
        stock: 45,
        categoryID: categories.find((c) => c.name === 'Electrónica').id,
      },
      {
        name: 'Vestido',
        description: 'Vestido de verano',
        price: 50,
        stock: 55,
        categoryID: categories.find((c) => c.name === 'Ropa').id,
      },
      {
        name: 'Cafetera',
        description: 'Cafetera de goteo',
        price: 80,
        stock: 20,
        categoryID: categories.find((c) => c.name === 'Hogar').id,
      },
      {
        name: 'Drone',
        description: 'Drone con cámara HD',
        price: 250,
        stock: 30,
        categoryID: categories.find((c) => c.name === 'Electrónica').id,
      },
      {
        name: 'Pelota',
        description: 'Pelota de fútbol',
        price: 25,
        stock: 90,
        categoryID: categories.find((c) => c.name === 'Juguetes').id,
      },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });