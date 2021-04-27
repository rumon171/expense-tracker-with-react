import { Component } from 'react';

export default class AmountInput extends Component {
    state = {
        expenseAmountEntered: 0
      };

    render() {
        return (
        <div>
            <label>Amount</label>
            <input id="expenseAmount" type="number" min="1" />
        </div>
        );
    } 
  }

