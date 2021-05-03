import React from 'react';
import InputItem from './InputItem';
interface Props {
    onExpenseChange: (value: any) => void;
    onAmountChange: (value: any) => void;
}

const ExpenseAmountInputContainer: React.FC<Props> = ({onExpenseChange, onAmountChange}: Props) => {
    
    return (
        <div>
            <InputItem 
                title="Expense" 
                onChange={onExpenseChange} 
                type="text" 
                placeholder="Item title" 
             
                
            />
            <InputItem 
                title="Amount" 
                onChange={onAmountChange}  
                type="number" 
                placeholder="Expense cost" 
                
            />
        </div>
    );
};

export default ExpenseAmountInputContainer;