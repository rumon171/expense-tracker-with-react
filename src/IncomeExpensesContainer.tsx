import React, { Component } from 'react';
import InputItem from './InputItem';

export default class IncomeExpensesContainer extends Component {
    state = {
        incomeEntered: 0,
        expensesTotal: 0
    };

    updateState = (e: any): void => {
        this.setState({ 
            incomeEntered : e.target.value
        });

        console.log('incomeEntered entered by user value ', e.target.value );

        this.showCurrentBalance();

        if (e.target.class !== 'has-value'){
            e.target.className = 'has-value';
        }
    };

    showCurrentBalance = (): void => {
        console.log('incomeEntered state value', this.state.incomeEntered);
        console.log('-----');
        //let balance: number = 0;
        //const incomeEntered: number = +incomeElement.value;
        // balance = incomeEntered - totalExpenses;
        // balanceElement.innerText = "" + balance;
        // incomeElement.classList.add("has-value");
        // balanceContainerElement.classList.add("visible");
    };
 
    render() {
        const { state } = this;

        return (
        <div className="income-expenses-container">
            <InputItem onChange={this.updateState} value={state.incomeEntered} title="Income" id="income" type="text" placeholder="Your income" />
            <div>
                <h3>Expenses</h3>
                <div id="expensesTotal">{state.expensesTotal}</div>
            </div> 
        </div>
        );
    }
  }