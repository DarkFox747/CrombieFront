import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Capturamos el ID dinámico

  switch (req.method) {
    case 'GET':
      return res.status(200).json({ mensaje: `Obteniendo producto con ID ${id}` });
    case 'PUT':
      return res.status(200).json({ mensaje: `Actualizando producto con ID ${id}` });
    case 'DELETE':
      return res.status(200).json({ mensaje: `Eliminando producto con ID ${id}` });
    default:
      return res.status(405).json({ error: 'Método no permitido' });
  }
}
