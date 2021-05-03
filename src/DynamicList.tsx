import React from "react";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
  export interface ListItem {
    expense: string;
    amount: number;
  }
  
  interface ListItemsArray {
    listItems: Array<ListItem>;
  }

  const DynamicList: React.FC<ListItemsArray> = ({listItems}: ListItemsArray) =>{
    return (
        <>
            <List>
                {listItems.map(item => (
                    <ListItem key={Math.random()} className="list-item">
                        <ListItemText primary={item.amount} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" >
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