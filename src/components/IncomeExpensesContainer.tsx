import React from "react";
import InputItem from './InputItem';
import Grid from '@material-ui/core/Grid';

interface Props {
    onIncomeInput: (value: number) => void; 
    totalExpenses: number;
    currencySymbol: string;
}



const IncomeExpensesContainer: React.FC<Props> = ({
        onIncomeInput, 
        totalExpenses, 
        currencySymbol,
    }: Props) => {
        const HandleInputChange = (value: string) => {
            onIncomeInput(Number(value));
        }

    return (
    <Grid container spacing={1} className="income-expenses-container">
        <Grid item xs={6}>
            <InputItem 
                onChange={HandleInputChange}
                title="Income" 
                type="number" 
                placeholder="Your income" 
                value=""
                />
        </Grid>
        <Grid item xs={6} className="centered">
            <h3>Total Expenses</h3>
            <div>{totalExpenses}{currencySymbol}</div>
        </Grid>
    </Grid>
    );
  }

  export default IncomeExpensesContainer;