import React, { useState } from "react";
import InputItem from './InputItem';

interface Props {
  onChange: (value: any) => void;
}

const ExpenseInput: React.FC<Props> = ({onChange}: Props) => {

    return (
      <InputItem title="Expense" onChange={onChange} id="expenseItem" type="text" placeholder="Item title" />
    );
  }

export default ExpenseInput;