import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ mensaje: `Obteniendo producto con ID ${params.id}` });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ mensaje: `Eliminando producto con ID ${params.id}` });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ mensaje: `Actualizando producto con ID ${params.id}` });
}
