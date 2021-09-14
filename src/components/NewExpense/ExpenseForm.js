import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //
  //Instead of using useState three times, we can use one state and adding the values inside an object like the following:
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // First Aproch:
    setEnteredTitle(event.target.value);
    //
    // If we are using "One State" instead of three separate states, we need to be careful about the other states in the object, in order to do not omit them. Because when the compiler sees the new state update, it simply replaces the new update with the previous state. It does not merge them together! In order to do so, we need to use "Spread Operation (...something)" to make sure we are saving the previous states.
    //
    // Second Approch:
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    //
    // Although this approch might not work properly in all cases. Because as we know, 'useState' will not be executed immidately but it will be scheduled for doing it. So, it may cause problems in the future. Hence, if the updated state depends on previous state (like now), using the privouse approch may cause errors. It's better to use the following approch in order to don't cross errors:
    //
    // Third Approch:
    // setUserInput = (prevState) => {
    //   return { ...prevState, setEnteredTitle: event.target.value };
    // };
    //
    // Although this function works well either, but here I personally prefer to use the first approch, because it's the current approch to do so. Here, I just wanted to show you, that there are another ways to do this too.
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  //
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <span>Title</span>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <span>Amount</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <span>Date</span>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
