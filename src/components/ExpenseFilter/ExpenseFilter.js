import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const [entered2022, setEntered2022] = useState("");
  const [entered2021, setEntered2021] = useState("");
  const [entered2020, setEntered2020] = useState("");
  const [entered2019, setEntered2019] = useState("");

  const option2022ChangeHandler = (event) => {
    setEntered2022(event.target.value);
  };

  const option2021ChangeHandler = (event) => {
    setEntered2021(event.target.value);
  };

  const option2020ChangeHandler = (event) => {
    setEntered2020(event.target.value);
  };

  const option2019ChangeHandler = (event) => {
    setEntered2019(event.target.value);
  };
  const selectHandler = (event) => {
    event.preventDefault();
    const expenseFilterData = {
      2022: entered2022,
      2021: entered2021,
      2020: entered2020,
      2019: entered2019,
    };
    props.onSaveExpenseFilterData(expenseFilterData);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="years">Filter by year</label>
        <select onChange={selectHandler}>
          <option
            name="2022"
            value={entered2022}
            onChange={option2022ChangeHandler}
          >
            2022
          </option>
          <option
            name="2021"
            value={entered2021}
            onChange={option2021ChangeHandler}
          >
            2021
          </option>
          <option
            name="2020"
            value={entered2020}
            onChange={option2020ChangeHandler}
          >
            2020
          </option>
          <option
            name="2019"
            value={entered2019}
            onChange={option2019ChangeHandler}
          >
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
