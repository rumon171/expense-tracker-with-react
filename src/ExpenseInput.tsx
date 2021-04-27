import { Component } from 'react';
import InputItem from './InputItem';

export default class ExpenseInput extends Component {
    state = {
      expenseEntered: 0
    };

    render() {
      return (
        <InputItem title="Expense" id="expenseItem" type="text" placeholder="Enter item" />
      );
    } 
  }
