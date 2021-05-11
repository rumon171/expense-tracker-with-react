import React from "react";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ExpensesListItem from './ExpensesListItem';
  export interface ListItemObject {
    expenseTitle: string;
    expenseAmount: string;
    id: number
  }
  interface ListItemsArray {
    listItems: Array<ListItemObject>;
    currencySymbol: string;
    onClick: (value: any) => void;
  }

  const DynamicList: React.FC<ListItemsArray> = (
    {
      listItems, 
      currencySymbol, 
      onClick
    }: ListItemsArray) => {
    return (
        <>
            <List>
                {listItems.map(item => (
                  <ExpensesListItem
                    id={item.id}
                    expenseTitle={item.expenseTitle} 
                    expenseAmount={item.expenseAmount}
                    currencySymbol={currencySymbol}
                    onClick={onClick}
                  />
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;