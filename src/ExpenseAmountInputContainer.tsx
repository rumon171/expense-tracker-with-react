import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';

interface Props {
    onChange: (value: any) => void;
}

const ExpenseAmountInputContainer: React.FC<Props> = ({onChange}: Props) => {
    
    return (
        <div>
            <ExpenseInput onChange={onChange} />
            <AmountInput />
        </div>
    );
};

export default ExpenseAmountInputContainer;