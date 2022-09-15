import prismaClient from "../src/database"

const defaultProducts = [
  {
    name: "Black Tea Powder",
    description: "Powder of black tea",
    price: 1.99,
    imgSrc: "black_tea.jpg"
  },
  {
    name: "Green Tea Powder",
    description: "Powder of green tea",
    price: 1.99,
    imgSrc: "green_tea.jpg"
  },
  {
    name: "Boba Pearls",
    description: "Yum yum yum",
    price: 5.99,
    imgSrc: "boba_pearls.jpg"
  },
  {
    name: "Boba Bottle",
    description: "Your bottle of boba",
    price: 7.99,
    imgSrc: "boba_bottle.jpg"
  }
]

/**
 * This is a script that runs on every app startup to reset the database data. This is just here to make the candidate's life easier, has nothing to do with the app features.
 */
export const main = async () => {
  await Promise.all([
    prismaClient.shoppingCart.deleteMany({
      where: {}
    }),
    prismaClient.order.deleteMany({
      where: {}
    }),
    prismaClient.product.deleteMany({
      where: {}
    })
  ])
  await Promise.all(defaultProducts.map(async (product) => {
    await prismaClient.product.create({
      data: {
        ...product
      }
    })
  }))
}

main()