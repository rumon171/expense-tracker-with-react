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
    //Expense: string;
   // setExpense: (value: string) => void;
   // Amount: string;
   // setAmount: (value: string) => void;
    ExpenseAndAmountList: Array<ExpenseAndAmounObject>;
    setExpenseAndAmountList: (value: any) => void;
    content: string;
}

const ExpenseAmountInputContainer: React.FC<Props> = (
        {
         //   Expense,
           // setExpense,
          //  Amount,
          //  setAmount,
            ExpenseAndAmountList, 
            setExpenseAndAmountList, 
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