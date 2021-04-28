import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';

interface Props {
    onExpenseChange: (value: any) => void;
    onAmountChange: (value: any) => void;
}

const ExpenseAmountInputContainer: React.FC<Props> = ({onExpenseChange, onAmountChange}: Props) => {
    
    return (
        <div>
            <ExpenseInput onChange={onExpenseChange} />
            <AmountInput onChange={onAmountChange}  />
        </div>
    );
};

export default ExpenseAmountInputContainer;