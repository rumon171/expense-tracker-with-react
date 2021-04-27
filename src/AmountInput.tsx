import React, { useState } from "react";

const AmountInput: React.FC = () => {
    //const [state, setState] = useState<boolean>(true);

    return (
    <div>
        <label>Amount</label>
        <input id="expenseAmount" type="number" min="1" />
    </div>
    );
  }


export default AmountInput;
