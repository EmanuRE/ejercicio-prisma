import { NextApiRequest, NextApiResponse } from 'next';
//import prisma from '../prisma';
import prisma from '../../../lib/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { codigo } = req.query;

  try {
    const product = await prisma.producto.findUnique({
      where: { codigo: String(codigo) },
    });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
}
