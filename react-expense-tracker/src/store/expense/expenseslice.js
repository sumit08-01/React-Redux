const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: "",
    expenseList: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpensesAction: (currentslice, action) => {
      console.log(action);
      currentslice.expenseList.push(action.payload);
    },
    addIncomeAction: (currentslice, action) => {
      console.log(action);
      currentslice.income = action.payload;
    },
    incrementActionCount: (currentslice, action) => {
      console.log(action);
      currentslice.countActionPerformed = action.countActionPerformed++;
    },
  },
});

export const { addExpensesAction, addIncomeAction, incrementActionCount } =
  expenseSlice.actions;
