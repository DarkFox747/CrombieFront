// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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