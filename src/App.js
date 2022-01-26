import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import data from "./components/Expenses/ExpensesContent";

function App() {
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses displayData={expenses} />
    </div>
  );
}

export default App;
