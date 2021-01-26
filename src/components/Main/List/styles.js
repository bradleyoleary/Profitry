import { makeStyles } from "@material-ui/core/styles";
import { red, green, lightGreen } from "@material-ui/core/colors";

export default makeStyles(() => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green["A700"],
  },
  avatarExpense: {
    backgroundColor: red["600"],
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
}));
