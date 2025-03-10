import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { categoriasID: string } }) {
  const { categoriasID } = params;

  try {
    const category = await prisma.category.findUnique({
      where: { id: Number(categoriasID) },
      include: { products: true },
    });
    if (!category) return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/categorias/[categoriasID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { categoriasID: string } }) {
  const { categoriasID } = params;
  const { name } = await req.json();

  try {
    const category = await prisma.category.update({
      where: { id: Number(categoriasID) },
      data: { name },
    });
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    console.error('Error en PUT /api/categorias/[categoriasID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { categoriasID: string } }) {
  const { categoriasID } = params;

  try {
    await prisma.category.delete({
      where: { id: Number(categoriasID) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error en DELETE /api/categorias/[categoriasID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}