import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  let expensesContent = <p>No Content was Found</p>;

  if ( filteredExpenses.length > 0)
  {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterHandler} />
        {expensesContent}
        
      </Card>
    </div>
  );
};

export default Expenses;
