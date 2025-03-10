import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
}

export async function POST(request: Request) {
  const data = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return NextResponse.json({ newUser }, { status: 201 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const updatedUser = await prisma.user.update({
    where: { id: data.id },
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return NextResponse.json({ updatedUser }, { status: 200 });
}

export async function DELETE(request: Request) {
  const data = await request.json();
  await prisma.user.delete({
    where: { id: data.id },
  });
  return NextResponse.json({ mensaje: 'Usuario eliminado' }, { status: 200 });
}