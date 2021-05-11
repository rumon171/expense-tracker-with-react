import React from "react";
interface Props {
    className: string;
}

const ErrorMessage: React.FC<Props> = ({className}: Props) => {
return (
        <div className={className}>
            Expense or amount value is invalid
        </div>
        );
    }

export default ErrorMessage;