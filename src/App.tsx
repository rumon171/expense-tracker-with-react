import React from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage';
import BalanceContainer from './BalanceContainer';
import CurrencyContainer from './CurrencyContainer';
import IncomeExpensesContainer from './IncomeExpensesContainer';
import ExpenseAmountInputContainer from './ExpenseAmountInputContainer';
import DynamicList from './DynamicList';
import AddButton from './AddButton';
import { useState } from 'react';


export default function App() {
    const appTitle: string = "Expense Tracker";

    const [ExpenseAndAmountList, setExpenseAndAmountList] = useState<Array<object>>([]);
    const [Expense, setExpense] = useState<number>(0);
    const [Amount, setAmount] = useState<number>(0);
    const [TotalExpensesAmount, setTotalExpensesAmount] = useState<number>(0);
    const [Income, setIncome] = useState<number>(0);
    const [TotalBalance, setTotalBalance] = useState<number>(0);

    const UpdateTotalExpensesAmount = () => {
      setTotalExpensesAmount((prev) => prev + Number(Amount));

      console.log('TotalExpensesAmount', TotalExpensesAmount);
    }

    const CountTotalBalance = () => {
      // setTotalBalance HAS TO BE SYNCHRONOUS
      setTotalBalance(() => Income - TotalExpensesAmount);
    }

    const UpdateIncome = (enteredValue: any) => {
      // setIncome HAS TO BE SYNCHRONOUS
      setIncome(() => enteredValue);
      CountTotalBalance();
    }  

    const UpdateTotalBalance = () => {
      CountTotalBalance();
    }

    const UpdateExpenseAndAmountList = (itemToAdd: object) => {
      let currentList = ExpenseAndAmountList;
      currentList.push(itemToAdd);
      setExpenseAndAmountList(() => currentList);

      console.log("ExpenseAndAmountList", ExpenseAndAmountList);
    }

    const AddItemToList = () => {
      UpdateTotalExpensesAmount();
      UpdateTotalBalance();
      UpdateExpenseAndAmountList({Expense, Amount});
      ResetExpenseAndAmountValues();
    }

    const ResetExpenseAndAmountValues = () => {
      //setAmount((prev) => prev = 0);
    }

    // DELETE ITEM PART IS MISSING

    // SHOW ERROR WARNING WHEN INPUTS ARE MISSING
    return (
      <div className="App">
        <ErrorMessage className="error-message"/>
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer totalBalance={TotalBalance} className="balance-container"/>
          <CurrencyContainer className="currency-container"/>
          <IncomeExpensesContainer 
            onIncomeInput={UpdateIncome} 
            totalExpenses={TotalExpensesAmount} 
          />
        </div>
        <ExpenseAmountInputContainer 
          onExpenseChange={setExpense} 
          onAmountChange={setAmount} 
        />
        <AddButton content="Add expense" onClick={AddItemToList} />
      </div>
    );
    //<DynamicList listItems={ExpenseAndAmountList} />
}