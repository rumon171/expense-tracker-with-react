import React from "react";
import { List } from "@material-ui/core";
import ExpensesListItem from './ExpensesListItem';
  export interface ExpenseAndAmounObject {
    expenseTitle: string;
    expenseAmount: string;
    id: number
  }
  interface ListItemsArray {
    listItems: Array<ExpenseAndAmounObject>;
    currencySymbol: string;
    setExpenseAndAmountList: (value: Array<ExpenseAndAmounObject>) => void;
  }

  const DynamicList: React.FC<ListItemsArray> = (
    {
      listItems, 
      currencySymbol,
      setExpenseAndAmountList
    }: ListItemsArray) => {

    return (
        <>
            <List>
                {listItems.map(item => (
                  <ExpensesListItem
                    key={item.id}
                    expenseTitle={item.expenseTitle} 
                    expenseAmount={item.expenseAmount}
                    currencySymbol={currencySymbol}
                    item={item}
                    items={listItems}
                    setExpenseAndAmountList={setExpenseAndAmountList}
                  />
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;