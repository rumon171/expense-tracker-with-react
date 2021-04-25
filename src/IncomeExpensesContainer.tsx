import * as React from 'react'
import InputItem from './InputItem';

export default function IncomeExpensesContainer(props: any) {
    const showCurrentBalance = () => {
        let balance: number = 0;
        //const incomeEntered: number = +incomeElement.value;

        // balance = incomeEntered - totalExpenses;

        // balanceElement.innerText = "" + balance;
        // incomeElement.classList.add("has-value");
        // balanceContainerElement.classList.add("visible");
        } 

    return (
    <div className={props.className}>
        <InputItem onClick={showCurrentBalance} title="Income" id="income" className="income" type="text" placeholder="Your income" />
        <div>
            <h3>Expenses</h3>
            <div id="expensesTotal">0</div>
        </div> 
    </div>
    );
}