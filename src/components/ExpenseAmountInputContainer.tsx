import React from 'react';
import { useState } from 'react';
import InputItem from './InputItem';
import AddButton from './AddButton';

interface ExpenseAndAmounObject {
    expenseTitle: string,
    expenseAmount: number,
    id: number  
}
interface Props {
    ExpenseAndAmountList: Array<ExpenseAndAmounObject>;
    setExpenseAndAmountList: (value: any) => void;
    setTotalExpensesAmount: (value: any) => void;
    content: string;
}

const ExpenseAmountInputContainer: React.FC<Props> = (
        {
            ExpenseAndAmountList, 
            setExpenseAndAmountList,
            setTotalExpensesAmount, 
            content
        }: Props
    ) => {
    
    const [Expense, setExpense] = useState<string>('');
    const [Amount, setAmount] = useState<string>('');

   /* const UpdateTotalBalance = () => {
        CountTotalBalance();
      }
  
      const UpdateExpenseAndAmountList = (itemToAdd: ListItem) => {
        let currentList = ExpenseAndAmountList;
        currentList.push(itemToAdd);
        setExpenseAndAmountList(() => currentList);
      }
  */
      const AddItemToList = () => {
        //UpdateTotalExpensesAmount();
        //UpdateTotalBalance();
        //UpdateExpenseAndAmountList({expense: Expense, amount: Amount});
        //ResetExpenseAndAmountValues();
        
        setExpenseAndAmountList(
            [
                ...ExpenseAndAmountList, 
                { 
                    expenseTitle: Expense,
                    expenseAmount: Amount,
                    id: Math.random() * 1000
                }
            ]
        );
            console.log('ExpenseAndAmountList ', ExpenseAndAmountList);
            
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