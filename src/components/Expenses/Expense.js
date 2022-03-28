import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterHandler = (enteredFilterYear) => {
    setFilteredYear(enteredFilterYear);
  };

  const filteredExpenses  = props.data.filter(expense =>
  expense.date.getFullYear().toString() === filteredYear
  )

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
