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
export const { addExpense, deleteExpense, editExpense, setExpenses } = expenseSlice.actions;
export const selectExpenses = (state) => {
  return state.expense.expenses; 
};

export default expenseSlice.reducer;
