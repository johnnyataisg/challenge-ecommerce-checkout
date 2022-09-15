import { Button, Card, Stack } from "@mui/material";
import React from "react";
import { ReactElement } from "react";
import styles from "../../styles/cart.module.css"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Product } from "@prisma/client";
import { useRouter } from "next/router";

const TAX_RATE = 0.07

interface CartItem {
  product: Product
  quantity: number
}

const Cart: React.FC = (): ReactElement => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([])
  const router = useRouter()

  const removeCartItem = async (product: Product): Promise<void> => {
    await fetch(`http://localhost:3000/api/cart/remove?product=${product.id}`, { method: "POST" })
    const response = await fetch(`http://localhost:3000/api/cart`)
    setCartItems((await response.json()).map((item: any) => {
      return { ...item }
    }))
  }

  const subtotal: number = React.useMemo(() => {
    let subTotal = 0
    cartItems.forEach(item => {
      subTotal += item.product.price * item.quantity
    })
    return subTotal
  }, [cartItems])

  const tax: number = React.useMemo(() => {
    return parseFloat((subtotal * TAX_RATE).toFixed(2))
  }, [subtotal])

  const total: string = React.useMemo(() => {
    return (subtotal - tax).toFixed(2)
  }, [subtotal, tax])

  const checkout = async (): Promise<void> => {
    await fetch("http://localhost:3000/api/cart/clear", { method: "DELETE" })
    const response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify({
        items: cartItems,
        subtotal,
        tax,
        total
      })
    })
    const order = await response.json()
    router.push("/checkout/" + order.id)
  }

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/cart`).then(async (response) => {
      const cartItems: CartItem[] = (await response.json()).map((item: any) => {
        return { ...item }
      })
      setCartItems(cartItems)
    })
  }, [])

  return (
    <Card id={styles.shoppingCart}>
      <h3>Shopping Cart</h3>
      <Stack spacing={2}>
        {cartItems.map(item => (
          <div key={item.product.id} style={{ display: "flex", alignContent: "center" }}>
            <p style={{ margin: 0 }}>
              {item.product.name} x {item.quantity}
            </p>
            <span style={{ marginLeft: "10px" }}>
              <RemoveCircleIcon style={{ cursor: "pointer", color: "red" }} onClick={() => removeCartItem(item.product)} />
              </span>
          </div>
        ))}
      </Stack>
      <h4>Subtotal: ${subtotal}</h4>
      <h4>Tax: ${tax}</h4>
      <h4>Total: ${total}</h4>
      <Button variant="contained" style={{ marginTop: "25px" }} onClick={() => checkout()}>Checkout</Button>
    </Card>
  )
}

export default Cart