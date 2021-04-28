import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';

interface Props {
    onChange: (value: any) => void;
}

const ExpenseAmountInputContainer: React.FC<Props> = () => {
    return (
        <div>
            <ExpenseInput />
            <AmountInput />
        </div>
    );
};

export default ExpenseAmountInputContainer;