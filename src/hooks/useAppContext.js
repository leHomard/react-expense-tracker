// This file has the aim to consume the context provided
// by the App provider

import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

const useAppContext = () => {
  // Consume the context created on the provider
  const [state, updateAccount] = useContext(AppContext);

  if (updateAccount === undefined) {
    throw new Error("Must have dispatch defined");
  }

  /* Add a transaction using the updater function which it takes 
  a draft and update the draft. For immutability purpose */
  function addTransaction(text, amount) {
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      name: text,
      amount: +amount,
      type: amount > 0 ? "Inc" : "Exp",
    };
    updateAccount((draft) => {
      draft.transactions.push(newTransaction);
      draft.balance += amount;
    });
  }

  // delete a transaction with the updater function
  function deleteTransaction(id, amount) {
    updateAccount((draft) => {
      draft.transactions = draft.transactions.filter((t) => t.id !== id);
      draft.balance += amount;
    });
  }

  // compute the amounts, income & expense
  const amounts = state.transactions.map((transaction) => transaction.amount);

  const balance = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);

  return {
    ...state,
    updateAccount,
    addTransaction,
    deleteTransaction,
    balance,
    income,
    expense,
  };
};

export default useAppContext;
