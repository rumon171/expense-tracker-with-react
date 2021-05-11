import React from "react";
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    expenseTitle: string;
    expenseAmount: string;
    currencySymbol: string;
   // onClick: (value: any) => void;
  }

const ExpensesListItem: React.FC<Props> = (
    {
        expenseTitle, 
        expenseAmount,
        currencySymbol,
       // onClick
    }: Props) => {
    return (
        <>
            <ListItem className="list-item">
                <ListItemText primary={expenseTitle} secondary={expenseAmount + currencySymbol}  />
                <ListItemSecondaryAction>
                    <IconButton edge="end">
                        <DeleteIcon className="delete-btn" />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
      );
  }
  
export default ExpensesListItem;