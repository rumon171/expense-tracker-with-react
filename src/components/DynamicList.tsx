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
    //onClick: (value: any) => void;
  }

  const DynamicList: React.FC<ListItemsArray> = (
    {
      listItems, 
      currencySymbol, 
     // onClick
    }: ListItemsArray) => {

    const DeleteListItem = (e: any) => {
      //console.log('e.target.parentNode.parentNode.parentNode.parentNode ', e.target.parentNode.parentNode.parentNode.parentNode.parentNode);
      //let clickedListitem = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
      //clickedListitem.remove();
    }

    return (
        <>
            <List>
                {listItems.map(item => (
                  <ExpensesListItem
                    key={item.id}
                    expenseTitle={item.expenseTitle} 
                    expenseAmount={item.expenseAmount}
                    currencySymbol={currencySymbol}
                    //onClick={onClick}
                  />
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;