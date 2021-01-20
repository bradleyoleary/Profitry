import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  console.group(formData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='centre' variant='subtitle2' gutterBottom>
          ...
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
            <MenuItem value='business'>Business</MenuItem>
            <MenuItem value='salary'>Salary</MenuItem>
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
          onChange={(ev) => setFormData({ ...formData, date: ev.target.value })}
        />
      </Grid>
      <Button fullWidth>Create</Button>
    </Grid>
  );
};

export default Form;
