import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { MainContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import formatDate from "../../../utils/formatDate";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { useSpeechContext } from "@speechly/react-client";

const initialState = {
  amount: "",
  category: "",
  type: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(MainContext);
  const { segment } = useSpeechContext();

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-"))
      return;
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, type: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, type: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((entity) => {
        const category = `${entity.value.charAt(0)}${entity.value
          .slice(1)
          .toLowerCase()}`;
        switch (entity.type) {
          case "amount":
            setFormData({ ...formData, amount: entity.value });
            break;
          case "category":
            if (
              incomeCategories
                .map((incomeCategory) => incomeCategory.type)
                .includes(category)
            ) {
              setFormData({ ...formData, type: "Income", category });
            } else if (
              expenseCategories
                .map((incomeCategory) => incomeCategory.type)
                .includes(category)
            ) {
              setFormData({ ...formData, type: "Expense", category });
            }
            break;
          case "date":
            setFormData({ ...formData, date: entity.value });
            break;
          default:
            break;
        }
      });
      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        createTransaction();
      }
    }
  }, [segment]);

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2} style={{ padding: "2em" }}>
      <Grid item xs={12}>
        <Typography
          align='centre'
          variant='subtitle2'
          style={{ color: "#818181", fontStyle: "italic" }}
          gutterBottom>
          {segment && segment.words.map((word) => word.value).join(" ")}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(ev) =>
              setFormData({ ...formData, type: ev.target.value })
            }>
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(ev) =>
              setFormData({ ...formData, category: ev.target.value })
            }>
            {selectedCategories.map((category) => (
              <MenuItem key={category.type} value={category.type}>
                {category.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='number'
          label='Amount'
          fullWidth
          value={formData.amount}
          onChange={(ev) =>
            setFormData({ ...formData, amount: ev.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type='date'
          label='Date'
          fullWidth
          value={formData.date}
          onChange={(ev) =>
            setFormData({ ...formData, date: formatDate(ev.target.value) })
          }
        />
      </Grid>
      <Button onClick={createTransaction}>Create</Button>
    </Grid>
  );
};

const Button = styled.button`
  width: 100%;
  background: #3498db;
  color: white;
  border: none;
  padding: 1.2em;
  margin-top: 24px;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export default Form;
