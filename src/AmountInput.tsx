import React, { useState } from "react";
import InputItem from './InputItem';
import TextField from '@material-ui/core/TextField';

interface Props {
  onChange: (value: any) => void;
}

const AmountInput: React.FC<Props> = ({onChange}: Props) => {

    return (
     <InputItem title="Amount" onChange={onChange} id="expenseAmount" type="number" placeholder="Enter expense cost" />
    );
  }


export default AmountInput;
