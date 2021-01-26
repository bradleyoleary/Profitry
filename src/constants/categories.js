//Colours for income and expenses
const incomeColors = [
  "#008c39",
  "#00a041",
  "#00b449",
  "#00c852",
  "#19cd63",
  "#32d374",
  "#4cd885",
  "#66de97",
  "#7fe3a8",
];
const expenseColors = [
  "#a21915",
  "#b41b17",
  "#c51e19",
  "#d6211b",
  "#e32823",
  "#e53934",
  "#e74a45",
  "#e95b57",
  "#ec6c68",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeColors[0] },
  { type: "Investments", amount: 0, color: incomeColors[1] },
  { type: "Extra income", amount: 0, color: incomeColors[2] },
  { type: "Deposits", amount: 0, color: incomeColors[3] },
  { type: "Lottery", amount: 0, color: incomeColors[4] },
  { type: "Gifts", amount: 0, color: incomeColors[5] },
  { type: "Salary", amount: 0, color: incomeColors[6] },
  { type: "Savings", amount: 0, color: incomeColors[7] },
  { type: "Rental income", amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "Car", amount: 0, color: expenseColors[1] },
  { type: "Travel", amount: 0, color: expenseColors[2] },
  { type: "Food", amount: 0, color: expenseColors[3] },
  { type: "Shopping", amount: 0, color: expenseColors[4] },
  { type: "House", amount: 0, color: expenseColors[5] },
  { type: "Entertainment", amount: 0, color: expenseColors[6] },
  { type: "Phone", amount: 0, color: expenseColors[8] },
  { type: "Other", amount: 0, color: expenseColors[8] },
];

//Reset function
export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
