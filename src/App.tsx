import React from 'react';
import { useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import BalanceContainer from './components/BalanceContainer';
import CurrencyContainer from './components/CurrencyContainer';
import IncomeExpensesContainer from './components/IncomeExpensesContainer';
import ExpenseAmountInputContainer from './components/ExpenseAmountInputContainer';
import DynamicList, { ListItem } from './components/DynamicList';
import AddButton from './components/AddButton';
import { currencySymbols } from './components/CurrenciesSymbolsList';

export default function App() {
    const appTitle: string = "Expense Tracker";

    const [ExpenseAndAmountList, setExpenseAndAmountList] = useState<Array<ListItem>>([]);
    const [Expense, setExpense] = useState<string>('');
    const [Amount, setAmount] = useState<number>(0);
    const [TotalExpensesAmount, setTotalExpensesAmount] = useState<number>(0);
    const [Income, setIncome] = useState<number>(0);
    const [TotalBalance, setTotalBalance] = useState<number>(0);
    const [SelectedCurrency, setSelectedCurrency] = useState<string>('EUR');

    const selectedCurrencySymbol: string = currencySymbols[SelectedCurrency].symbol;
  
    const UpdateTotalExpensesAmount = () => {
      setTotalExpensesAmount((prev) => prev + Number(Amount));
    }

    const CountTotalBalance = () => {
      setTotalBalance(() => Income - TotalExpensesAmount);
      //console.log('TotalBalance ', TotalBalance);
    }

    const UpdateIncome = (enteredValue: number) => {
     // console.log('enteredValue ', enteredValue);
      setIncome(() => enteredValue);

      // setIncome HAS TO BE SYNCHRONOUS

      console.log('Income ', Income);
      CountTotalBalance();
    }

    const UpdateTotalBalance = () => {
      CountTotalBalance();
    }

    const UpdateExpenseAndAmountList = (itemToAdd: ListItem) => {
      let currentList = ExpenseAndAmountList;
      currentList.push(itemToAdd);
      setExpenseAndAmountList(() => currentList);
    }

    const AddItemToList = () => {
      UpdateTotalExpensesAmount();
      UpdateTotalBalance();
      UpdateExpenseAndAmountList({expense: Expense, amount: Amount});
      ResetExpenseAndAmountValues();
    }

    const ResetExpenseAndAmountValues = () => {
      //setAmount((prev) => prev = 0);
      // CLEAR INPUT FIELDS HERE
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
          onExpenseChange={setExpense} 
          onAmountChange={setAmount} 
        />
        <AddButton 
          content="Add expense" 
          onClick={AddItemToList} 
        />
        <DynamicList 
          listItems={ExpenseAndAmountList} 
          currencySymbol={selectedCurrencySymbol} 
          onClick={DeleteListItem} 
          />
      </div>
    );
}