import React from "react";
import { List } from "@material-ui/core";
import ExpensesListItem from './ExpensesListItem';
  export interface ListItemObject {
    expenseTitle: string;
    expenseAmount: string;
    id: number
  }
  interface ListItemsArray {
    listItems: Array<ListItemObject>;
    currencySymbol: string;
  }

  const DynamicList: React.FC<ListItemsArray> = (
    {
      listItems, 
      currencySymbol
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
                  />
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;