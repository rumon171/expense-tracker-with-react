import React from "react";
import InputItem from './InputItem';
import Grid from '@material-ui/core/Grid';
interface Props {
    income: string;
    setIncome: (value: string) => void; 
    totalExpenses: number;
    currencySymbol: string;
}

const IncomeExpensesContainer: React.FC<Props> = ({
        income,
        setIncome, 
        totalExpenses, 
        currencySymbol,
    }: Props) => {

        return (
            <Grid container spacing={1} className="income-expenses-container">
                <Grid item xs={6}>
                    <InputItem 
                        onChange={setIncome}
                        title="Income" 
                        type="number" 
                        placeholder="Your income" 
                        value={income}
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