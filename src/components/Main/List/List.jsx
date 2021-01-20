import React, { useContext } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff, AttachMoney } from "@material-ui/icons";
import useStyles from "./styles";
import { MainContext } from "../../../context/context";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(MainContext);

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 1500,
      date: "Jan 17 2021",
    },
    {
      id: 2,
      type: "Expense",
      category: "Car",
      amount: 50,
      date: "Jan 17 2021",
    },
    {
      id: 3,
      type: "Expense",
      category: "Salary",
      amount: 50,
      date: "Jan 17 2021",
    },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }>
                <AttachMoney />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`$${transaction.amount}`}
              secondary={`${transaction.category} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete' onClick=''>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
