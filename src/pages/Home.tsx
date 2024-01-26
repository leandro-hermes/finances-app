import CategoryIcon from "@mui/icons-material/Category";
import SaveIcon from "@mui/icons-material/Save";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect } from "react";
import { useApp } from "../hooks/app";
import { CurrencyInput } from "../shared/components/CurrencyInput";
import { now } from "../shared/util/dates.ts";

type ExpenseFormValues = Record<"amount" | "date" | "description" | "details" | "category", string>;

function extractFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries()) as unknown as ExpenseFormValues;

  return {
    ...data,
    amount: Number(data.amount.replace(/,/g, "")),
    date: data.date.split("/").reverse().join("-"),
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
    const data = extractFormData(event.currentTarget);
    console.log(data);
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
        <Autocomplete
          disablePortal
          options={[
            "Mercado",
            "Lazer/iFood",
            "Farmácia",
            "Combustível",
          ]}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              <CategoryIcon className="mr-2" />
              {option}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} name="category" label="Categoria" required />}
        />
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
