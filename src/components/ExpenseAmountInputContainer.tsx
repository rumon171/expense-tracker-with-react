import React from 'react';
import { useState } from 'react';
import InputItem from './InputItem';
import AddButton from './AddButton';
import ErrorMessage from './ErrorMessage';
import { ExpenseAndAmountObject } from '../ExpenseAndAmountObject';
interface Props {
    expenseAndAmountList: Array<ExpenseAndAmountObject>;
    setExpenseAndAmountList: (value: Array<ExpenseAndAmountObject>) => void;
    setTotalExpensesAmount: (value: any) => void;
    setTotalBalance: (value: number) => void;
    income: string;
    totalExpenses: number; 
}

const ExpenseAmountInputContainer: React.FC<Props> = (
        {
            expenseAndAmountList, 
            setExpenseAndAmountList,
            setTotalExpensesAmount,
            setTotalBalance, 
            income,
            totalExpenses,
        }: Props
    ) => {
    
    const [Expense, setExpense] = useState<string>('');
    const [Amount, setAmount] = useState<string>('');
    const [ifNotValidInputs, setIfNotValidInputs] = useState<boolean>(false);

    const AddItemToList = () => {
        if (Expense !== '' && Amount !== '' && Number(Amount) > 0) {
            setExpenseAndAmountList(
                [
                    ...expenseAndAmountList, 
                    { 
                        expenseTitle: Expense,
                        expenseAmount: Amount,
                        id: Math.random() * 1000
                    }
                ]
            );
            setTotalExpensesAmount((prev: number) => prev + Number(Amount));
            setExpense("");
            setAmount("");
            setIfNotValidInputs(false);
            setTotalBalance(Number(income) - totalExpenses);
        } else {
            setIfNotValidInputs(true);
        }
    }

    return (
        <div>
            <InputItem 
                onChange={setExpense} 
                title="Expense" 
                type="text" 
                placeholder="Item title" 
                value={Expense}
             
            />
            <InputItem 
                onChange={setAmount}  
                title="Amount" 
                type="number" 
                placeholder="Expense cost" 
                value={Amount}
            
            />
            <AddButton 
                onClick={AddItemToList} 
                content="Add expense"

            />
            { ifNotValidInputs === true ? <ErrorMessage className="error-message"/> : null }
        </div>
    );
};

export default ExpenseAmountInputContainer;