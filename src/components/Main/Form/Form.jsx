import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  TextField,
  // Typography,
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

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(MainContext);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2} style={{ padding: "2em" }}>
      <Grid item xs={12}>
        {/* <Typography align='centre' variant='subtitle2' gutterBottom>
          ...
        </Typography> */}
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
            <MenuItem value='Expenses'>Expenses</MenuItem>
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
