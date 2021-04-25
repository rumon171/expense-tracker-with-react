import './App.css';
import ErrorMessage from './ErrorMessage';
import BalanceContainer from './BalanceContainer';
import CurrencyContainer from './CurrencyContainer';
import IncomeExpensesContainer from './IncomeExpensesContainer';
import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';
import AddButton from './AddButton';



function App() {
  const appTitle: string = "sdfdfsd Tracker";

  return (
    <div className="App">
      <ErrorMessage />
      <div>
        <h1>{appTitle}</h1>
        <BalanceContainer />
        <CurrencyContainer />
        <IncomeExpensesContainer />
      </div>
      <form>
        <ExpenseInput />
        <AmountInput />
      </form>
        <AddButton content="Add expense"/>
        <div id="list"></div>
    </div>
  );
}

export default App;
