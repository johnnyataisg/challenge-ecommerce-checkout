import { Order, Product } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import React from "react"
import NavBar from "../../src/components/NavBar"
import styles from "../../styles/index.module.css"

interface CheckoutPageProps {
  order: Order
}

interface OrderSummary {
  id: number
  subtotal: number
  tax: number
  total: number
}

const CheckoutPage: NextPage<CheckoutPageProps> = ({ order }: CheckoutPageProps) => {
  const orderSummary: OrderSummary = JSON.parse(order.summary)

  return (
    <div id={styles.appContainer}>
      <NavBar />
      <div className={styles.content}>
        <h4>Thank you for shopping with us!</h4>
        <p>Order Id: {order.id}</p>
        <p>Subtotal: ${orderSummary.subtotal}</p>
        <p>Tax: ${orderSummary.tax}</p>
        <p>Total: ${orderSummary.total}</p>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/order?id=${context.query.orderId}`)
  const order = await response.json()
  return {
    props: {
      order
    }
  }
}

export default CheckoutPage
