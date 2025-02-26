import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ mensaje: `Obteniendo usuario con ID ${params.id}` });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ mensaje: `Eliminando usuario con ID ${params.id}` });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ mensaje: `Actualizando usuario con ID ${params.id}` });
}
