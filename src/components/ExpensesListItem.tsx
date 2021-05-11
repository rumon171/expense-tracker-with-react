import React from "react";
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    expenseTitle: string;
    expenseAmount: string;
    currencySymbol: string;
    item: object;
    //onClick: (value: any) => void;
  }

const ExpensesListItem: React.FC<Props> = (
    {
        expenseTitle, 
        expenseAmount,
        currencySymbol,
        item
    }: Props) => {

    const DeleteListItem = () => {

        console.log("item ", item);
    }

    return (
        <>
            <ListItem className="list-item">
                <ListItemText primary={expenseTitle} secondary={expenseAmount + currencySymbol}  />
                <ListItemSecondaryAction>
                    <IconButton onClick={DeleteListItem} edge="end">
                        <DeleteIcon className="delete-btn" />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
      );
  }
  
export default ExpensesListItem;