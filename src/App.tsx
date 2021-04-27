import React from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage';
import BalanceContainer from './BalanceContainer';
import CurrencyContainer from './CurrencyContainer';
import IncomeExpensesContainer from './IncomeExpensesContainer';
import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';
import AddButton from './AddButton';



export default function App() {
    const appTitle: string = "Expense Tracker";

    // Add item to list
    const addItemToList = (e: any) => {
      e.preventDefault();
      console.log('addItemToList works ');
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
        <form>
          <ExpenseInput />
          <AmountInput />
          <AddButton content="Add expense" onClick={addItemToList} />
        </form>
          <div id="list"></div>
      </div>
    );
  }