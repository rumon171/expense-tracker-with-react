import InputItem from './InputItem';

function IncomeExpensesContainer(props: any) {
    return (
    <div className={props.className}>
        <InputItem title="Income" id="income" className="income" type="text" placeholder="Your income" />
        <div>
            <h3>Expenses</h3>
            <div id="expensesTotal">0</div>
        </div> 
    </div>
    );
  }
  
export default IncomeExpensesContainer;