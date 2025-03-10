// app/api/productos/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const search = searchParams.get('search') || '';
  const skip = (page - 1) * limit;

  try {
    const where = search
      ? { name: { contains: search } } // Quitamos 'mode: insensitive' para MySQL
      : {};

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        include: { category: true },
      }),
      prisma.product.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/productos:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Internal server error', error: errorMessage }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { name, description, price, stock, categoryID } = await req.json();

  try {
    const product = await prisma.product.create({
      data: { name, description, price, stock, categoryID },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error en POST /api/productos:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: 'Internal server error', error: errorMessage }, { status: 500 });
  }
}