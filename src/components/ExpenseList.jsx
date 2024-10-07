import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectExpenses, deleteExpense, editExpense } from '../slices/expenseSlice';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';

const ExpenseList = () => {
  const expenses = useSelector(selectExpenses); //from store :)
  const dispatch = useDispatch();

  const [editingIndex, setEditingIndex] = useState(-1);
  const [editCategory, setEditCategory] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editDate, setEditDate] = useState('');


  const handleDelete = (index) => {
    dispatch(deleteExpense(index));
  };

  
  const handleEditClick = (index) => {
    setEditingIndex(index);
    const expenseToEdit = expenses[index];
    setEditCategory(expenseToEdit.category);
    setEditAmount(expenseToEdit.amount);
    setEditDate(expenseToEdit.date);
  };

  
  const handleSaveEdit = (index) => {
    const updatedExpense = {
      category: editCategory,
      amount: editAmount,
      date: editDate,
    };
    dispatch(editExpense({ index, updatedExpense }));
    setEditingIndex(-1); 
  };

  return (
    <Box sx={{ marginTop: '20px' }}>
      <Typography variant="h5" sx={{ color: "#1f2d4d", marginBottom: "16px" }}>
        Expense List
      </Typography>
      {expenses.length === 0 ? (
        <Typography>No expenses added yet.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="expense list table">
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {editingIndex === index ? (
                      <TextField
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                      />
                    ) : (
                      expense.category
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editingIndex === index ? (
                      <TextField
                        type="number"
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                      />
                    ) : (
                      `$${expense.amount}`
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editingIndex === index ? (
                      <TextField
                        type="date"
                        value={editDate}
                        onChange={(e) => setEditDate(e.target.value)}
                      />
                    ) : (
                      expense.date
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {editingIndex === index ? (
                      <Button onClick={() => handleSaveEdit(index)} color="primary">
                        Save
                      </Button>
                    ) : (
                      <>
                        <Button onClick={() => handleEditClick(index)} color="primary">
                          Edit
                        </Button>
                        <Button onClick={() => handleDelete(index)} color="secondary">
                          Delete
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ExpenseList;
