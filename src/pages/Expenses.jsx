// src/pages/Expenses.js
import React from "react";
import { Box, Typography } from "@mui/material";
import ExpenseList from "../components/ExpenseList";
import Background from "../assets/background.jpg";

const Expenses = ({ expenses = [] }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundImage: `url(${Background})`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {expenses.length === 0 ? (
        <Typography variant="body1" sx={{ color: "white", fontSize: "25px", textAlign: "center" }}>
          No expenses found.
        </Typography>
      ) : (
        <ExpenseList expenses={expenses} />
      )}
    </Box>
  );
};

export default Expenses;
