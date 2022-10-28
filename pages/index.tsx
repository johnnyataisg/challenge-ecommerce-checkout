import { Button } from "@mui/material"
import { Product } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import React, { useState } from "react"
import NavBar from "../src/components/NavBar"
import ProductList from "../src/components/ProductList"
import styles from "../styles/index.module.css"

const fetchProducts = async ({ sorted }: { sorted: boolean }) => {
  const productsResponse = await fetch(`http://localhost:3000/api/products${sorted ? "?sorted=true" : ""}`)
  return await productsResponse.json()
}

interface HomeProps {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }: HomeProps) => {
  const [productList, setProductList] = useState(products);

  const sortClickHandler = async () => {
    setProductList(await fetchProducts({ sorted: true }))
  }

  return (
    <div id={styles.appContainer}>
      <NavBar />
      <div className={styles.content}>
        <Button variant="contained" className={styles.sortButton} onClick={sortClickHandler}>Sort A-Z</Button>
        <ProductList products={productList} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      products: await fetchProducts({ sorted: false })
    }
  }
}

export default Home
