import "./Expense.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
// import Chart from "../Chart/Chart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // It's better to create another component for this part.
  // EITHER \\
  // let expenseContent = <p>No Expenses Found!</p>;
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expenses) => (
  //     <ExpenseItem
  //       key={expenses.id}
  //       title={expenses.title}
  //       date={expenses.date}
  //       price={expenses.amount}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />

        {/* OR */}
        {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found!</p>
      ) : (
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            price={expenses.amount}
          />
        ))
      )} */}
        {/* OR */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            price={expenses.amount}
          />
        ))} */}

        {/* <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        price={props.expenses[0].amount}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        price={props.expenses[1].amount}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        price={props.expenses[2].amount}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        price={props.expenses[3].amount}
      /> */}
      </Card>
    </div>
  );
};

export default Expense;
