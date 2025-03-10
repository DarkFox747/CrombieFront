// app/api/usuarios/[usuariosID]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { usuariosID: string } }) {
  const { usuariosID } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(usuariosID) },
    });
    if (!user) return NextResponse.json({ message: 'User not found' }, { status: 404 });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/usuarios/[usuariosID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { usuariosID: string } }) {
  const { usuariosID } = params;
  const { email, name, password } = await req.json();

  try {
    const user = await prisma.user.update({
      where: { id: Number(usuariosID) },
      data: { email, name, password },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error en PUT /api/usuarios/[usuariosID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { usuariosID: string } }) {
  const { usuariosID } = params;

  try {
    await prisma.user.delete({
      where: { id: Number(usuariosID) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error('Error en DELETE /api/usuarios/[usuariosID]:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}