import React from "react";
interface Props {
    totalBalance: number;
    setTotalBalance: (value: number) => void;
    income: string;
    totalExpenses: number; 
    className: string;
    currencySymbol: string;
  }

  const BalanceContainer: React.FC<Props> = (
    {
      totalBalance, 
      setTotalBalance,
      income,
      totalExpenses,
      className, 
      currencySymbol
    }: Props) =>{
    
    const CountTotalBalance = () => {
     // setTotalBalance(() => Income - TotalExpensesAmount);
      //console.log('TotalBalance ', TotalBalance);
    }

    setTotalBalance(Number(income) - totalExpenses);

    return (
        <h2 className={className}>
            Total Balance:
            <span> {totalBalance}{currencySymbol}</span>
        </h2>
    );
  }
  
export default BalanceContainer;





