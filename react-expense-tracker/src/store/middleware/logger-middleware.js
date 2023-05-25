import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addExpensesAction,
  addIncomeAction,
  incrementActionCount,
} from "store/expense/expenseslice";

export const loggerMiddleWare = createListenerMiddleware();
loggerMiddleWare.startListening({
  //   predicate: (action) => {
  //     // return true; // This will listen all the action
  //     return (
  //       action.type === "expenseSlice/addExpensesAction" ||
  //       "expenseSlice/addIncomeAction" // if you want to listen a particular type of action
  //     );
  //   },
  // Another type of predicate In which you wnat directly add actions
  matcher: isAnyOf(addExpensesAction, addIncomeAction),
  effect: async (action, listenerAPI) => {
    // console.log("Action", action);
    listenerAPI.dispatch(incrementActionCount());
    console.log("New store Value", listenerAPI.getState());
  },
});
