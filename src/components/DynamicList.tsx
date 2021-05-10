import React from "react";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
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
                    <ListItem key={Math.random()} className="list-item">
                        <ListItemText primary={item.expenseTitle} secondary={item.expenseAmount + currencySymbol}  />
                        <ListItemSecondaryAction onClick={onClick}>
                            <IconButton edge="end">
                                <DeleteIcon className="delete-btn" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;