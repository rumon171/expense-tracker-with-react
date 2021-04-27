import React from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage';
import BalanceContainer from './BalanceContainer';
import CurrencyContainer from './CurrencyContainer';
import IncomeExpensesContainer from './IncomeExpensesContainer';
import ExpenseAmountInputContainer from './ExpenseAmountInputContainer';
import AddButton from './AddButton';
import { useState } from 'react';



export default function App() {
    const appTitle: string = "Expense Tracker";

    const [Expense, setExpense] = useState<number>(0);
    const [Amount, setAmount] = useState<number>(0);

    // Add item to list
    const addItemToList = (e: any) => {
      console.log('addItemToList works ');
      console.log('ExpenseInputstate ', Expense);
      console.log('AmountInputstate ', Amount);
  }

    return (
      <div className="App">
        <ErrorMessage id="error-message" className="error-message"/>
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer id="balance-container" className="balance-container"/>
          <CurrencyContainer className="currency-container"/>
          <IncomeExpensesContainer />
        </div>
        <ExpenseAmountInputContainer 
          addExpense={setExpense} 
          addAmount={setAmount} 
        />
        <AddButton content="Add expense" onClick={addItemToList} />
        <div id="list"></div>
      </div>
    );
}