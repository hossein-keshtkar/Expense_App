import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import Card from "./Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated!");
  // };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      {/* <button onClick={clickHandler} type="button">
        Primary
      </button> */}
    </div>
  );
};
export default ExpenseItem;
