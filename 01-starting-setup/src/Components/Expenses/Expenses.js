//import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterHandler} />
        <ExpensesList items={filteredExpenses}/>
        
      </Card>
    </div>
  );
};

export default Expenses;
