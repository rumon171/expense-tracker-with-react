import InputItem from './InputItem';

function IncomeExpensesContainer(props: any) {
    const onInputFunc = () => {
        console.log('works');
    }

    return (
    <div className={props.className}>
        <InputItem onClick={onInputFunc} title="Income" id="income" className="income" type="text" placeholder="Your income" />
        <div>
            <h3>Expenses</h3>
            <div id="expensesTotal">0</div>
        </div> 
    </div>
    );
  }
  
export default IncomeExpensesContainer;