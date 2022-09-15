import { Grid, Card, Button } from "@mui/material";
import { Product } from "@prisma/client";
import React from "react";
import { ReactElement } from "react";
import styles from "../../styles/productList.module.css"

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }: ProductListProps): ReactElement => {
  const addToCart = async (product: Product): Promise<void> => {
    console.log(product)
    await fetch(`http://localhost:3000/api/cart/add?&product=${product.id}`, { method: "POST" })
  }

  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid key={product.id} item xs={2}>
          <Card className={styles.productCard}>
            <h3>{product.name}</h3>
            <img src={`/${product.imgSrc}`} width="100%" height="180px" />
            <p>{product.description}</p>
            <p>${product.price.toString()}</p>
            <Button variant="contained" onClick={() => addToCart(product)}>Add To Cart</Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList