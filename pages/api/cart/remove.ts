import { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../src/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    if (!req.query.product) {
      throw new Error("Missing fields")
    }
    const productId = parseInt(req.query.product as any)
    const cartItem = await prismaClient.shoppingCart.findUnique({
      where: {
        productId
      }
    })
    if (cartItem.quantity <= 1) {
      await prismaClient.shoppingCart.delete({
        where: {
          productId
        }
      })
    } else {
      await prismaClient.shoppingCart.update({
        where: {
          productId
        },
        data: {
          quantity: {
            decrement: 1
          }
        }
      })
    }
    res.status(200).json({})
  }
}