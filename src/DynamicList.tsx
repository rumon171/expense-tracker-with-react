import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
  export interface ListItem {
    expense: string;
    amount: number;
  }
  
  interface ListItemsArray { // renamed from ITrueFalse
    listItems: Array<ListItem>;
  }

  const DynamicList: React.FC<ListItemsArray> = ({listItems}: ListItemsArray) =>{
    return (
        <>
            <List>
                {listItems.map(item => (
                    <ListItem key={Math.random()} className="list-item">
                        <ListItemText primary={item.amount} />
                    </ListItem>
                ))} 
            </List>
        </>
      );
  }
  
export default DynamicList;