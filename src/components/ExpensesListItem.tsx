import React from "react";
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { ExpenseAndAmountObject } from '../ExpenseAndAmountObject';

interface Props {
    expenseTitle: string;
    expenseAmount: string;
    currencySymbol: string;
    item: ExpenseAndAmountObject;
    items: Array<ExpenseAndAmountObject>;
    setExpenseAndAmountList: (value: Array<ExpenseAndAmountObject>) => void;
  }

const ExpensesListItem: React.FC<Props> = (
    {
        expenseTitle, 
        expenseAmount,
        currencySymbol,
        item,
        items,
        setExpenseAndAmountList
    }: Props) => {

    const DeleteListItem = () => {
        setExpenseAndAmountList(items.filter(el => el.id !== item.id));
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