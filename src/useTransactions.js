import { useContext } from "react";
import { MainContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(MainContext);
  const transactionsType = transactions.filter((t) => t.type === title);
  const total = transactionsType.reduce(
    (acc, currentVal) => (acc += currentVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  // console.log({ transactionsType, total, categories });

  transactionsType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  return { total, chartData };
};

export default useTransactions;
