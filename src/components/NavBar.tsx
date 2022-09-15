import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ReactElement } from "react";

// Write code in this component to trigger showing the shopping cart
const NavBar: React.FC = (): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bobalicious
          </Typography>
          <p color="inherit" style={{ marginRight: "10px" }}>Welcome back, Tom!</p>
          <ShoppingCartIcon style={{ cursor: "pointer" }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar