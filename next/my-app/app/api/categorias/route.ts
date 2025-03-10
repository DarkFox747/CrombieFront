import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const skip = (page - 1) * limit;

  try {
    const [categories, total] = await Promise.all([
      prisma.category.findMany({
        skip,
        take: limit,
        include: { products: true },
      }),
      prisma.category.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: categories,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/categorias:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { name } = await req.json();

  try {
    const category = await prisma.category.create({
      data: { name },
    });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Error en POST /api/categorias:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}