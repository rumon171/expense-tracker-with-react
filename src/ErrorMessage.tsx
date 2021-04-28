import React from "react";

interface Props {
    className: string;
}

const ErrorMessage: React.FC<Props> = ({className}: Props) => {
return (
            <div className={className}>
                Please enter a title for the expense and amount of money spent for it
            </div>
        );
    }

export default ErrorMessage;