import React, { Component } from 'react';
import InputItem from './InputItem';

export default class IncomeExpensesContainer extends Component {
    state = {
        balance: 0,
        incomeEntered: 0
    };

    showCurrentBalance = (e: any): number => {
        this.setState({ incomeEntered : e.target.value });

        console.log('entered value ', e.target.value );
        console.log('state value', this.state.incomeEntered);

        return 1;
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
        const { state } = this;

        return (
        <div className="income-expenses-container">
            <InputItem onChange={this.showCurrentBalance} value={state.incomeEntered} title="Income" id="income" className="income" type="text" placeholder="Your income" />
            <div>
                <h3>Expenses</h3>
                <div id="expensesTotal">0</div>
            </div> 
        </div>
        );
    }
  }