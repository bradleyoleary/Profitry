import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

export default makeStyles(() => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    backgroundColor: red[500],
  },
  list: {
    maxHeight: "180px",
    overflow: "auto",
  },
}));
