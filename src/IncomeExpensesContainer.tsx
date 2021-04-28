import React from "react";
import InputItem from './InputItem';
import Grid from '@material-ui/core/Grid';

const IncomeExpensesContainer: React.FC = () => {
    return (
    <Grid container spacing={1} className="income-expenses-container">
        <Grid item xs={6}>
            <InputItem title="Income" id="income" type="text" placeholder="Your income" />
        </Grid>
        <Grid item xs={6} className="centered">
            <h3>Expenses</h3>
            <div id="expensesTotal">expensesTotal here</div>
        </Grid>
    </Grid>
    );
  }

  export default IncomeExpensesContainer;