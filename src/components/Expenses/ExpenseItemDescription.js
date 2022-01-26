import React from "react";
import "./ExpenseItemDescription.css";

function ExpenseItemDescription(props) {
  return (
    <div className="expense-item__description">
      <h2 className="expense-item__title">{props.title}</h2>
      <div className="expense-item__price">₹{props.amount}</div>
      <p className="expense-item__paymentMode">{props.paymentMode}</p>
    </div>
  );
}

export default ExpenseItemDescription;
