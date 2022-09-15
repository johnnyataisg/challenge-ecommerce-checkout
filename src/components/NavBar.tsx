import { ShoppingCart } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ReactElement } from "react";
import Cart from "./Cart";

const NavBar: React.FC = (): ReactElement => {
  const [showCart, setShowCart] = React.useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bobalicious
          </Typography>
          <p color="inherit" style={{ marginRight: "10px" }}>Welcome back, Tom!</p>
          <ShoppingCart style={{ cursor: "pointer" }} onClick={() => setShowCart(!showCart)} />
          {showCart && <Cart />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar