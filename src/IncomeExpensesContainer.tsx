import React, { Component } from 'react';
import InputItem from './InputItem';

export default class IncomeExpensesContainer extends Component {
    state = {
        incomeEntered: 0,
        class: '',
        expensesTotal: 0
    };

    updateState = (e: any): void => {
        this.setState({ 
            incomeEntered : e.target.value,
            class: 'has-value' 
        });

        console.log('entered value ', e.target.value );

        //incomeElement.classList.add("has-value");
        //console.log('state class ', this.state.class);

        this.showCurrentBalance();
    };

    showCurrentBalance = (): void => {
        console.log('aaaa ');

        console.log('state value', this.state.incomeEntered);

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
            <InputItem onChange={this.updateState} value={state.incomeEntered} className="income" title="Income" id="income" type="text" placeholder="Your income" />
            <div>
                <h3>Expenses</h3>
                <div id="expensesTotal">{state.expensesTotal}</div>
            </div> 
        </div>
        );
    }
  }