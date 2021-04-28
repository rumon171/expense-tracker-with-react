import React from "react";
interface Props {
    totalBalance: number;
    className: string;
  }

  const BalanceContainer: React.FC<Props> = ({totalBalance, className}: Props) =>{
    return (
        <h2 className={className}>
            Total Balance:
            <span>{totalBalance}</span>
        </h2>
    );
  }
  
export default BalanceContainer;





