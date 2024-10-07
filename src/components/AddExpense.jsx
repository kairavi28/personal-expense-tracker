import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addExpense } from "../slices/expenseSlice";
import categories from "../categories.json";

function AddExpense() {
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !amount || !date) {
      alert("Please fill in all fields.");
      return;
    }
    const expenseData = {
      category,
      amount: parseFloat(amount),
      date,
    };

    dispatch(addExpense(expenseData));
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        padding: { xs: "16px", sm: "24px", md: "30px" },
        backgroundColor: "#1f2d4d",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: { xs: "100%", sm: "450px", md: "410px" },
        margin: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: 700,
          marginBottom: { xs: "12px", sm: "16px" },
          fontSize: { xs: "20px", sm: "24px" },
        }}
      >
        Add Expense
      </Typography>

      <FormControl
        fullWidth
        sx={{
          marginBottom: "16px",
          backgroundColor: "#ECEFF1",
          borderRadius: "8px",
        }}
      >
        <InputLabel sx={{ color: "#2E2E2E", fontWeight: 600 }}>
          Category
        </InputLabel>
        <Select
          labelId="category"
          id="category"
          value={category}
          label="Category"
          onChange={handleCategoryChange}
          sx={{ textAlign: "left", fontWeight: 600 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category} sx={{ textAlign: "left" }}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        sx={{
          marginBottom: "16px",
          backgroundColor: "#ECEFF1",
          borderRadius: "8px",
          "& .MuiInputLabel-root": { color: "#2E2E2E" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#B0BEC5",
            },
            "&:hover fieldset": {
              borderColor: "#757575",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2E2E2E",
            },
          },
          "& input": {
            color: "#2E2E2E",
            fontWeight: 600,
          },
        }}
      />

      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          marginBottom: "16px",
          backgroundColor: "#ECEFF1",
          borderRadius: "8px",
          "& .MuiInputLabel-root": { color: "#2E2E2E" },
          "& input": {
            color: "#2E2E2E",
            fontWeight: 600,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#B0BEC5",
            },
            "&:hover fieldset": {
              borderColor: "#757575",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2E2E2E",
            },
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#FF5252",
          color: "#E0E0E0",
          padding: { xs: "10px", sm: "12px" },
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: { xs: "14px", sm: "16px" },
          "&:hover": {
            backgroundColor: "#FF1744",
          },
        }}
      >
        Add Expense
      </Button>
    </Box>
  );
}

export default AddExpense;
