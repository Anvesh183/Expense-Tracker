import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredPaymentMode, setEnteredPaymentMode] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const paymentModeChangeHandler = (event) => {
    setEnteredPaymentMode(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      paymentMode: enteredPaymentMode,
    };

    props.onSubmitExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredPaymentMode("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            autoFocus
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="10"
            step="10"
            onChange={amountChangeHandler}
            value={enteredAmount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="payment-mode">Payment Mode</label>
          <select
            id="payment-mode"
            name="payment-mode"
            onChange={paymentModeChangeHandler}
            value={enteredPaymentMode}
            required
          >
            <option value="">--Choose an Option--</option>
            <option value="AmazonPay ICICI Credit Card">
              AmazonPay ICICI Credit Card
            </option>
            <option value="Flipkart Axis Credit Card">
              Flipkart Axis Credit Card
            </option>
            <option value="UPI">UPI</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
