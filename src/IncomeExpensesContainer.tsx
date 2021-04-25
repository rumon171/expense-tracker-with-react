import React, { Component } from 'react';
import InputItem from './InputItem';

export default class IncomeExpensesContainer extends Component {
    state = {
        currentBalance: 0,
    };

    showCurrentBalance = (): number => {
        console.log('aaa');
        return 3;
    };


    // const showCurrentBalance = () => {
    //     let balance: number = 0;
        //const incomeEntered: number = +incomeElement.value;

        // balance = incomeEntered - totalExpenses;

        // balanceElement.innerText = "" + balance;
        // incomeElement.classList.add("has-value");
        // balanceContainerElement.classList.add("visible");
        // } 

        
    render() {
        return (
        <div className="income-expenses-container">
            <InputItem onClick={this.showCurrentBalance} title="Income" id="income" className="income" type="text" placeholder="Your income" />
            <div>
                <h3>Expenses</h3>
                <div id="expensesTotal">0</div>
            </div> 
        </div>
        );
    }
  }