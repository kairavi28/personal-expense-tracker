// src/components/Navbar.js
import * as React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "navy" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "navy" }}>
          Expense Tracker
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ color: "navy" }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/expenses" sx={{ color: "navy" }}>
          Expenses
        </Button>
        <Button color="inherit" component={Link} to="/stats" sx={{ color: "navy" }}>
          Stats
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
