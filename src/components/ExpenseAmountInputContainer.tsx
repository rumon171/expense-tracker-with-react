import React from 'react';
import { useState } from 'react';
import InputItem from './InputItem';
import AddButton from './AddButton';

interface ExpenseAndAmounObject {
    expenseTitle: string,
    expenseAmount: string,
    id: number  
}
interface Props {
    expenseAndAmountList: Array<ExpenseAndAmounObject>;
    setExpenseAndAmountList: (value: Array<ExpenseAndAmounObject>) => void;
    setTotalExpensesAmount: (value: any) => void;
    content: string;
}

const ExpenseAmountInputContainer: React.FC<Props> = (
        {
            expenseAndAmountList, 
            setExpenseAndAmountList,
            setTotalExpensesAmount, 
            content
        }: Props
    ) => {
    
    const [Expense, setExpense] = useState<string>('');
    const [Amount, setAmount] = useState<string>('');

      const AddItemToList = () => {
        
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

        setExpense("");
        setAmount("");

        setTotalExpensesAmount((prev: number) => prev + Number(Amount));
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
        </div>
    );
};

export default ExpenseAmountInputContainer;