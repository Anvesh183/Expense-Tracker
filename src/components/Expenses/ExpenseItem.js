import React from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemDescription from "./ExpenseItemDescription";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseItemDate day={props.day} month={props.month} year={props.year} />
      <ExpenseItemDescription
        title={props.title}
        amount={props.amount}
        paymentMode={props.paymentMode}
      />
    </div>
  );
}

export default ExpenseItem;
