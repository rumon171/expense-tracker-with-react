import React from "react";
interface Props {
    className: string;
}

const ErrorMessage: React.FC<Props> = ({className}: Props) => {
return (
        <div className={className}>
            Enter an expense and amount of money spent for it
        </div>
        );
    }

export default ErrorMessage;