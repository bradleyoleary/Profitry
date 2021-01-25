import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 80,
    category: "Deposits",
    type: "Income",
    date: "2021-01-22",
    id: "bd97a7e7-9e8c-4c9e-aff5-95c20656e093",
  },
];

export const MainContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Creating actions
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  console.log(transactions);

  return (
    <MainContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}>
      {children}
    </MainContext.Provider>
  );
};
