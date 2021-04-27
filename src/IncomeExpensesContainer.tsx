import React, { useState } from "react";
import InputItem from './InputItem';
//import BalanceContainer from './BalanceContainer';
const IncomeExpensesContainer: React.FC = () => {
    const [state, setState] = useState<number>(0);

  /*  const updateState = (e: any): void => {
        setState();

        console.log('incomeEntered entered by user value ', e.target.value );

        //this.showCurrentBalance();

        if (e.target.class !== 'has-value'){
            e.target.className = 'has-value';
        }
    };
    

    const showCurrentBalance = (): void => {
        console.log('incomeEntered state value', this.state.incomeEntered);
        console.log('-----');
        //let balance: number = 0;
        //const incomeEntered: number = +incomeElement.value;
        // balance = incomeEntered - totalExpenses;
        // balanceElement.innerText = "" + balance;
        // incomeElement.classList.add("has-value");
        // balanceContainerElement.classList.add("visible");
    }; */
 
       // const { state } = this;

    return (
    <div className="income-expenses-container">
        <InputItem title="Income" id="income" type="text" placeholder="Your income" />
        <div>
            <h3>Expenses</h3>
            <div id="expensesTotal">expensesTotal here</div>
        </div> 
    </div>
    );
  }

  export default IncomeExpensesContainer;