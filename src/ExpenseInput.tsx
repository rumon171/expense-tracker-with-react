import React, { useState } from "react";
import InputItem from './InputItem';

const ExpenseInput: React.FC = () => {
    //const [state, setState] = useState<boolean>(true);

    return (
      <InputItem title="Expense" id="expenseItem" type="text" placeholder="Enter item" />
    );
  }

export default ExpenseInput;