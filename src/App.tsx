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
    const [TotalExpensesAmount, setTotalAmount] = useState<number>(0);
    const [Income, setIncome] = useState<number>(0);
    const [TotalBalance, setTotalBalance] = useState<number>(0);

    // Add item to list
    const AddItemToList = () => {
      setTotalAmount((prev) => prev + Number(Amount));
    }

    const CountTotalBalance = () => {
      setTotalBalance(() => Income - TotalExpensesAmount);
    }   

    return (
      <div className="App">
        <ErrorMessage id="error-message" className="error-message"/>
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer totalBalance={TotalBalance} className="balance-container"/>
          <CurrencyContainer className="currency-container"/>
          <IncomeExpensesContainer 
            onIncomeInput={setIncome} 
            totalExpenses={TotalExpensesAmount} 
          />
        </div>
        <ExpenseAmountInputContainer 
          onExpenseChange={setExpense} 
          onAmountChange={setAmount} 
        />
        <AddButton content="Add expense" onClick={AddItemToList} />
        <div id="list">aa</div>
      </div>
    );
}