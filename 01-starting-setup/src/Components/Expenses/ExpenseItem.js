import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react';


const ExpenseItem = (props) => {

  const [title,setTitle] = useState(props.title); 


  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);

  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div clasName="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Done!</button>
    </Card>
  );
};

export default ExpenseItem;
