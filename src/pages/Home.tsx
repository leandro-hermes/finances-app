import SaveIcon from "@mui/icons-material/Save";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect } from "react";
import { useApp } from "../hooks/app";
import { CurrencyInput } from "../shared/components/CurrencyInput";
import { now } from "../shared/util/dates.ts";

const normalizeData = (data: Record<string, any>) => {
  return {
    ...data,
    amount: Number(String(data.amount).replace(",", "")),
    date: String(data.date).split("/").reverse().join("-"),
    description: data.description || null,
    details: data.details || null,
  };
}

const ExpenseForm = () => {
  const { setTitle } = useApp();

  useEffect(() => {
    setTitle("Nova despesa");
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(normalizeData(data));
  }

  return (
    <form className="h-full" onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2}>
        <CurrencyInput
          label="Valor"
          name="amount"
          variant="outlined"
          required
        />
        <DatePicker
          label="Data"
          name="date"
          defaultValue={now()}
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
        <Fab type="submit" color="primary" aria-label="add">
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
