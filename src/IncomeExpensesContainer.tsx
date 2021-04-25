function IncomeExpensesContainer() {
    return (
    <div className="income-expenses-container">
        <div>
            <label>Income</label>
            <input id="income" className="income" type="text" placeholder="Your income" />
        </div>
        <div>
            <h3>Expenses</h3>
            <div id="expensesTotal">0</div>
        </div>       
    </div>
    );
  }
  
export default IncomeExpensesContainer;