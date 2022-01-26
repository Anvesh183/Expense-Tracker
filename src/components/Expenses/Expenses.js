import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import data from "./ExpensesContent";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearFilterHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.displayData.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  const customStyle = {
    color: "white",
    fontSize: "2rem",
    paddingLeft: "2rem",
  };

  let expenseContent = <p style={customStyle}>No expenses available</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          paymentMode={item.paymentMode}
          day={item.date.toLocaleString("en-US", { day: "2-digit" })}
          month={item.date.toLocaleString("en-US", { month: "long" })}
          year={item.date.getFullYear()}
        />
      );
    });
  }

  return (
    <div className="expenses">
      <div>
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={yearFilterHandler}
        />
      </div>
      <div className="expenses-list">{expenseContent}</div>
    </div>
  );
}

export default Expenses;
