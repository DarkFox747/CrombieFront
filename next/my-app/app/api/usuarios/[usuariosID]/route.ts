import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { usuariosID: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.usuariosID) },
  });

  if (!user) {
    return NextResponse.json({ mensaje: 'Usuario no encontrado' }, { status: 404 });
  }

  return NextResponse.json({ user }, { status: 200 });
}

export async function DELETE(req: Request, { params }: { params: { usuariosID: string } }) {
  try {
    await prisma.user.delete({
      where: { id: parseInt(params.usuariosID) },
    });
    return NextResponse.json({ mensaje: 'Usuario eliminado' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ mensaje: 'Error eliminando usuario' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { usuariosID: string } }) {
  const data = await req.json();
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.usuariosID) },
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return NextResponse.json({ updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ mensaje: 'Error actualizando usuario' }, { status: 500 });
  }
}
