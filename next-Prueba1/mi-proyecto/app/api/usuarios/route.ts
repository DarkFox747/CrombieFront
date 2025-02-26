import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ mensaje: 'Obteniendo todos los usuarios' });
}

export async function POST() {
  return NextResponse.json({ mensaje: 'Creando un usuario' });
}

export async function DELETE() {
  return NextResponse.json({ mensaje: 'Eliminando un usuario' });
}

export async function PUT() {
  return NextResponse.json({ mensaje: 'Actualizando un usuario' });
}
