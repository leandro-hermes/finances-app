import SaveIcon from "@mui/icons-material/Save";
import { InputAdornment, Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useApp } from "../hooks/app";

const ExpenseForm = () => {
  const { setTitle } = useApp();

  useEffect(() => {
    setTitle("Nova despesa");
  });

  return (
    <form className="h-full">
      <Stack direction="column" spacing={2}>
        <TextField
          label="Valor"
          name="amount"
          variant="outlined"
          defaultValue="0,00"
          InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment> }}
          required
        />
        <DatePicker
          label="Data"
          name="date"
          defaultValue={dayjs()}
          slotProps={{
            textField: {
              required: true,
            },
          }}
        />
        <TextField label="Descrição" name="description" variant="outlined" />
        <TextField label="Detalhes" name="details" variant="outlined" multiline />
      </Stack>
      <div className="absolute bottom-4 right-4">
        <Fab color="primary" aria-label="add">
          <SaveIcon />
        </Fab>
      </div>
    </form>
  )
};

export const Home = () => {
  return (
    <div className="p-4 h-full relative">
      <ExpenseForm />
    </div>
  )
};
