import React from "react";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
  export interface ListItem {
    expense: string;
    amount: number;
  }
  
  interface ListItemsArray {
    listItems: Array<ListItem>;
    currencySymbol: string;
    onClick: (value: any) => void;
  }

  const DynamicList: React.FC<ListItemsArray> = ({listItems, currencySymbol, onClick}: ListItemsArray) => {
    return (
        <>
            <List>
                {listItems.map(item => (
                    <ListItem key={Math.random()} className="list-item">
                        <ListItemText primary={item.expense} secondary={item.amount + currencySymbol}  />
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