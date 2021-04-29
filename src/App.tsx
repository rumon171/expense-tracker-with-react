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
    const [TotalExpensesAmount, setTotalExpensesAmount] = useState<number>(0);
    const [Income, setIncome] = useState<number>(0);
    const [TotalBalance, setTotalBalance] = useState<number>(0);

    const UpdateTotalExpensesAmount = () => {
      setTotalExpensesAmount((prev) => prev + Number(Amount));
    }

    const CountTotalBalance = () => {
      // THIS ONE HAS TO BE SYNCHRONOUS
      setTotalBalance(
        () => Income - TotalExpensesAmount
      );
    }

    const UpdateTotalBalance = () => {
      CountTotalBalance();
    // show total balance CHANGING INCOME part is missing
    }

    const AddItemToList = () => {
      UpdateTotalExpensesAmount();
      UpdateTotalBalance();
      // add item to list part is missing
    }

    // DELETE ITEM PART IS MISSING
    return (
      <div className="App">
        <ErrorMessage className="error-message"/>
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