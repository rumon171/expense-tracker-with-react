import React from "react";
import InputItem from './InputItem';
interface Props {
  onChange: (value: any) => void;
}

const AmountInput: React.FC<Props> = ({onChange}: Props) => {

    return (
     <InputItem title="Amount" onChange={onChange} id="expenseAmount" type="number" placeholder="Expense cost" />
    );
  }


export default AmountInput;
