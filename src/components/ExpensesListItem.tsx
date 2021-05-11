import React from "react";
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    id: number;
    expenseTitle: string;
    expenseAmount: string;
    currencySymbol: string;
    onClick: (value: any) => void;
  }

const ExpensesListItem: React.FC<Props> = (
    {
        id, 
        expenseTitle, 
        expenseAmount,
        currencySymbol,
        onClick
    }: Props) => {
    return (
        <>
            <ListItem key={id} className="list-item">
                <ListItemText primary={expenseTitle} secondary={expenseAmount + currencySymbol}  />
                <ListItemSecondaryAction onClick={onClick}>
                    <IconButton edge="end">
                        <DeleteIcon className="delete-btn" />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
      );
  }
  
export default ExpensesListItem;