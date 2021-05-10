import React from 'react';
import { useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import BalanceContainer from './components/BalanceContainer';
import CurrencyContainer from './components/CurrencyContainer';
import IncomeExpensesContainer from './components/IncomeExpensesContainer';
import ExpenseAmountInputContainer from './components/ExpenseAmountInputContainer';
import DynamicList, { ListItem } from './components/DynamicList';
import { currencySymbols } from './components/CurrenciesSymbolsList';

export default function App() {
    const appTitle: string = "Expense Tracker";

    const [ExpenseAndAmountList, setExpenseAndAmountList] = useState<
      Array<{
        expenseTitle: string,
        expenseAmount: number,
        id: number
      }>
    >([]);

    const [TotalExpensesAmount, setTotalExpensesAmount] = useState<number>(0);
    const [Income, setIncome] = useState<number>(0);
    const [TotalBalance, setTotalBalance] = useState<number>(0);
    const [SelectedCurrency, setSelectedCurrency] = useState<string>('EUR');

    const selectedCurrencySymbol: string = currencySymbols[SelectedCurrency].symbol;
  
    /*const UpdateTotalExpensesAmount = () => {
      setTotalExpensesAmount((prev) => prev + Number(Amount));
    }*/

   /* const CountTotalBalance = () => {
      setTotalBalance(() => Income - TotalExpensesAmount);
      //console.log('TotalBalance ', TotalBalance);
    } */

    const UpdateIncome = (enteredValue: number) => {
     // console.log('enteredValue ', enteredValue);
      setIncome(() => enteredValue);

      // setIncome HAS TO BE SYNCHRONOUS

      console.log('Income ', Income);
     // CountTotalBalance();
    }

    const DeleteListItem = (e: any) => {
      //console.log('e.target.parentNode.parentNode.parentNode.parentNode ', e.target.parentNode.parentNode.parentNode.parentNode.parentNode);
      //let clickedListitem = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
      //clickedListitem.remove();
    }

    // function - SHOW ERROR WARNING WHEN INPUTS ARE MISSING
 
    return (
      <div className="App">
        <ErrorMessage className="error-message"/>
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer 
            totalBalance={TotalBalance} 
            className="balance-container" 
            currencySymbol={selectedCurrencySymbol} 
          />
          <CurrencyContainer 
            className="currency-container" 
            onChange={setSelectedCurrency} 
          />
          <IncomeExpensesContainer 
            onIncomeInput={UpdateIncome} 
            totalExpenses={TotalExpensesAmount} 
            currencySymbol={selectedCurrencySymbol}
          />
        </div>
        <ExpenseAmountInputContainer 
          ExpenseAndAmountList={ExpenseAndAmountList}
          setExpenseAndAmountList={setExpenseAndAmountList}
          content="Add expense"  
        />

      </div>
    );
}

       /* <DynamicList 
          listItems={ExpenseAndAmountList} 
          currencySymbol={selectedCurrencySymbol} 
          onClick={DeleteListItem} 
          />*/