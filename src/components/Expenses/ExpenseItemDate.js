import React from "react";
import "./ExpenseItemDate.css";

function ExpenseItemDate(props) {
  return (
    <div className="expense-item__date">
      <div className="expense-item__day">{props.day}</div>
      <div className="expense-item__month"> {props.month}</div>
      <div className="expense-item__year"> {props.year}</div>
    </div>
  );
}

export default ExpenseItemDate;
