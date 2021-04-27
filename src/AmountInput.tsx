import React, { useState } from "react";
import InputItem from './InputItem';
import TextField from '@material-ui/core/TextField';

const AmountInput: React.FC = () => {
    //const [state, setState] = useState<boolean>(true);

    return (
   /* <div>
        <label>Amount</label>
        <TextField id="expenseAmount" type="number" label="Enter expense cost" className="full-width" variant="outlined" />
    </div> */
     <InputItem title="Amount" id="expenseAmount" type="number" placeholder="Enter expense cost" />
    );
  }


export default AmountInput;
