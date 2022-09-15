import { NextApiRequest, NextApiResponse } from "next"
import prismaClient from "../../../src/database"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    if (!req.query.product) {
      throw new Error("Missing fields")
    }
    const productId = parseInt(req.query.product as any)
    await prismaClient.shoppingCart.upsert({
      where: {
        productId
      },
      update: {
        quantity: {
          increment: 1
        }
      },
      create: {
        product: {
          connect: { id: productId }
        },
        quantity: 1
      }
    })
    res.status(200).json({})
  }
}