import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const ExpenseForm = () => {
  return (
    <form>
      <TextField
        label="Valor"
        name="amount"
        variant="outlined"
        defaultValue="0,00"
        InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment> }}
        required
      />
      <TextField label="Descrição" name="description" variant="outlined"/>
    </form>
  )
};

export const Home = () => {
  return (
    <div className="p-4">
      <ExpenseForm/>
    </div>
  )
};
