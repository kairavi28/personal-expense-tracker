import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenses.splice(action.payload, 1);
    },
    editExpense: (state, action) => {
      const { index, updatedExpense } = action.payload;
      state.expenses[index] = updatedExpense;
    },
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

// Exporting the actions
export const { addExpense, deleteExpense, editExpense, setExpenses } = expenseSlice.actions;

// Selector to get expenses

export const selectExpenses = (state) => {
  return state.expense.expenses; 
};

// Exporting the reducer
export default expenseSlice.reducer;
