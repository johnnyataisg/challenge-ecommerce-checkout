import { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../src/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { sorted } = req.query
    const products = await prismaClient.product.findMany({
      orderBy: sorted === "true" ? [
        {
          name: "asc"
        }
      ] : undefined
    })
    res.status(200).json(products)
  }
}