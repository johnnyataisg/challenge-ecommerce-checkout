import { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../src/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const products = await prismaClient.product.findMany()
    res.status(200).json(products)
  }
}