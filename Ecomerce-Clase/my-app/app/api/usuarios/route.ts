import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const skip = (page - 1) * limit;

  try {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: limit,
      }),
      prisma.user.count(), // Total de registros para calcular páginas
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: users,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/usuarios:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { email, name, password } = await req.json();

  try {
    const user = await prisma.user.create({
      data: { email, name, password },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error en POST /api/usuarios:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}