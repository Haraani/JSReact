import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [editing, onEditing] = useState(false);

  const editingHandler = () => {
    onEditing(true);
  };

  const cancelHandler = () => {
    onEditing(false);
  };

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      ID: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    onEditing(false);
  };

  return (
    <div className=" new-expense">
      {!editing && <button onClick={editingHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          oncancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
