import React from 'react';
import { useState } from 'react';
import './App.css';
import BalanceContainer from './components/BalanceContainer';
import CurrencyContainer from './components/CurrencyContainer';
import IncomeExpensesContainer from './components/IncomeExpensesContainer';
import ExpenseAmountInputContainer from './components/ExpenseAmountInputContainer';
import DynamicList from './components/DynamicList';
import { currencySymbols } from './components/CurrenciesSymbolsList';

export default function App() {
    const appTitle: string = "Expense Tracker";

    const [ExpenseAndAmountList, setExpenseAndAmountList] = useState<
      Array<{
        expenseTitle: string,
        expenseAmount: string,
        id: number
      }>
    >([]);

    const [TotalExpensesAmount, setTotalExpensesAmount] = useState<number>(0);
    const [Income, setIncome] = useState<string>("");
    const [TotalBalance, setTotalBalance] = useState<number>(0);
    const [SelectedCurrency, setSelectedCurrency] = useState<string>('EUR');
    const selectedCurrencySymbol: string = currencySymbols[SelectedCurrency].symbol;

    return (
      <div className="App">
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer 
            totalBalance={TotalBalance} 
            setTotalBalance={setTotalBalance}
            income={Income}
            totalExpenses={TotalExpensesAmount} 
            className="balance-container" 
            currencySymbol={selectedCurrencySymbol} 
          />
          <CurrencyContainer 
            className="currency-container" 
            onChange={setSelectedCurrency} 
          />
          <IncomeExpensesContainer 
            income={Income}
            setIncome={setIncome} 
            totalExpenses={TotalExpensesAmount} 
            currencySymbol={selectedCurrencySymbol}
          />
        </div>
        <ExpenseAmountInputContainer 
          expenseAndAmountList={ExpenseAndAmountList}
          setExpenseAndAmountList={setExpenseAndAmountList}
          setTotalExpensesAmount={setTotalExpensesAmount}
          content="Add expense"  
        />
        <DynamicList 
          expenseAndAmountList={ExpenseAndAmountList} 
          currencySymbol={selectedCurrencySymbol}
          setExpenseAndAmountList={setExpenseAndAmountList}
        />
      </div>
    );
}

