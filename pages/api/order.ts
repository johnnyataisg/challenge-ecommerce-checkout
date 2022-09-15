import { NextApiRequest, NextApiResponse } from "next"
import prismaClient from "../../src/database"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const order = await prismaClient.order.findUnique({
      where: {
        id: parseInt(req.query.id as any)
      }
    })
    res.status(200).json(order)
  } else if (req.method === "POST") {
    const order = await prismaClient.order.create({
      data: {
        summary: req.body
      }
    })
    res.status(200).json(order)
  }
}