import React from "react";
interface Props {
    totalBalance: number;
    className: string;
    currencySymbol: string;
  }

  const BalanceContainer: React.FC<Props> = ({totalBalance, className, currencySymbol}: Props) =>{
    return (
        <h2 className={className}>
            Total Balance:
            <span> {totalBalance}{currencySymbol}</span>
        </h2>
    );
  }
  
export default BalanceContainer;





