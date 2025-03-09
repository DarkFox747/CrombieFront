import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json({ products }, { status: 200 });
}

export async function POST(request: Request) {
  const data = await request.json();
  const newproduct = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
        price: data.price,

    },
  });
  return NextResponse.json({ newproduct }, { status: 201 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const updatedproduct = await prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      description: data.description,
        price: data.price,
    },
  });
  return NextResponse.json({ updatedproduct }, { status: 200 });
}

export async function DELETE(request: Request) {
  const data = await request.json();
  await prisma.product.delete({
    where: { id: data.id },
  });
  return NextResponse.json({ mensaje: 'Usuario eliminado' }, { status: 200 });
}