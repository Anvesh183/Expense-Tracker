import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const yearFilterHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__controls">
        <div>
          <label htmlFor="filter-by-year">Filter by Year</label>
        </div>
        <div>
          <select
            name="filter-by-year"
            id="filter-by-year"
            value={props.selected}
            onChange={yearFilterHandler}
            className="filter-by-year"
          >
            <option value="">-Select Year-</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2023">2024</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ExpensesFilter;
