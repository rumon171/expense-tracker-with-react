import React from "react";
import { List } from "@material-ui/core";
import ExpensesListItem from './ExpensesListItem';
import { ExpenseAndAmountObject } from '../ExpenseAndAmountObject';
  interface ListItemsArray {
    expenseAndAmountList: Array<ExpenseAndAmountObject>;
    currencySymbol: string;
    setExpenseAndAmountList: (value: Array<ExpenseAndAmountObject>) => void;
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