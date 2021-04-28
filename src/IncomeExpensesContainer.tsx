import React from "react";
import InputItem from './InputItem';
import Grid from '@material-ui/core/Grid';

interface Props {
    onIncomeInput: (value: any) => void 
    totalExpenses: number;
}

const IncomeExpensesContainer: React.FC<Props> = ({onIncomeInput, totalExpenses}: Props) => {
    return (
    <Grid container spacing={1} className="income-expenses-container">
        <Grid item xs={6}>
            <InputItem 
                onChange={onIncomeInput}
                title="Income" 
                id="income" 
                type="text" 
                placeholder="Your income" />
        </Grid>
        <Grid item xs={6} className="centered">
            <h3>Total Expenses</h3>
            <div>{totalExpenses}</div>
        </Grid>
    </Grid>
    );
  }

  export default IncomeExpensesContainer;