import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';

const ExpenseAmountInputContainer: React.FC = () => {
    return (
        <div>
            <ExpenseInput />
            <AmountInput />
        </div>
    );
};

export default ExpenseAmountInputContainer;