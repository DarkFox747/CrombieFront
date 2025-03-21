import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { productosID: string } }) {
  const { productosID } = params;

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(productosID) },
      include: { category: true },
    });
    if (!product) return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/productos/[productosID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { productosID: string } }) {
  const { productosID } = params;
  const { name, description, price, stock, categoryID } = await req.json();

  try {
    const product = await prisma.product.update({
      where: { id: Number(productosID) },
      data: { name, description, price, stock, categoryID },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error en PUT /api/productos/[productosID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { productosID: string } }) {
  const { productosID } = params;

  try {
    await prisma.product.delete({
      where: { id: Number(productosID) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error en DELETE /api/productos/[productosID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}