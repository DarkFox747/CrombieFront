import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { productosID: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.productosID) },
  });

  if (!product) {
    return NextResponse.json({ mensaje: 'Usuario no encontrado' }, { status: 404 });
  }

  return NextResponse.json({ product }, { status: 200 });
}

export async function DELETE(req: Request, { params }: { params: { productosID: string } }) {
  try {
    await prisma.product.delete({
      where: { id: parseInt(params.productosID) },
    });
    return NextResponse.json({ mensaje: 'Usuario eliminado' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ mensaje: 'Error eliminando usuario' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { productosID: string } }) {
  const data = await req.json();
  try {
    const updatedproduct = await prisma.product.update({
      where: { id: parseInt(params.productosID) },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
      },
    });
    return NextResponse.json({ updatedproduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ mensaje: 'Error actualizando usuario' }, { status: 500 });
  }
}
