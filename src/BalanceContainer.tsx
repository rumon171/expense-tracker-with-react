import React from "react";
interface Props {
    className: string;
  }

  const BalanceContainer: React.FC<Props> = ({className}: Props) =>{
    return (
        <h2 className={className}>
            Total Balance:
            <span>30</span>
        </h2>
    );
  }
  
export default BalanceContainer;





