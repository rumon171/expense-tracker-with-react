import React from "react";
import { List } from "@material-ui/core";
import ExpensesListItem from './ExpensesListItem';
  export interface ExpenseAndAmounObject {
    expenseTitle: string;
    expenseAmount: string;
    id: number
  }
  interface ListItemsArray {
    expenseAndAmountList: Array<ExpenseAndAmounObject>;
    currencySymbol: string;
    setExpenseAndAmountList: (value: Array<ExpenseAndAmounObject>) => void;
  }

  const DynamicList: React.FC<ListItemsArray> = (
    {
      expenseAndAmountList, 
      currencySymbol,
      setExpenseAndAmountList
    }: ListItemsArray) => {

    return (
        <>
            <List>
                {expenseAndAmountList.map(item => (
                  <ExpensesListItem
                    key={item.id}
                    expenseTitle={item.expenseTitle} 
                    expenseAmount={item.expenseAmount}
                    currencySymbol={currencySymbol}
                    item={item}
                    items={expenseAndAmountList}
                    setExpenseAndAmountList={setExpenseAndAmountList}
                  />
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;