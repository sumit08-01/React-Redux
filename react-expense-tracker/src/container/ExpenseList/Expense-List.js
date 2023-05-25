import { List } from "components/List/List";
import React from "react";
import { useSelector } from "react-redux";

export const ExpenseList = () => {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  return <List items={expenseList} />;
};
