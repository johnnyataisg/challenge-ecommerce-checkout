import { Product } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import React from "react"
import NavBar from "../src/components/NavBar"
import ProductList from "../src/components/ProductList"
import styles from "../styles/index.module.css"

interface HomeProps {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }: HomeProps) => {
  return (
    <div id={styles.appContainer}>
      <NavBar />
      <div className={styles.content}>
        <ProductList products={products} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productsResponse = await fetch("http://localhost:3000/api/products")
  const products = await productsResponse.json()
  return {
    props: {
      products
    }
  }
}

export default Home
