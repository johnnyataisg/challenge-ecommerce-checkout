import { Product } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import React from "react"
import NavBar from "../src/components/NavBar"
import styles from "../styles/index.module.css"

interface HomeProps {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }: HomeProps) => {
  return (
    <div id={styles.appContainer}>
      <NavBar />
      {/* Write code for displaying product listings */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Write code for fetching product listings from API call
}

export default Home
