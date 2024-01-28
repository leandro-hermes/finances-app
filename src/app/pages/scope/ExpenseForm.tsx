import CategoryIcon from "@mui/icons-material/Category";
import SaveIcon from "@mui/icons-material/Save";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import { Category } from "~models/category";
import { Expense } from "~models/expense";
import { CurrencyInput } from "~shared/components/CurrencyInput";
import { now, parseForDatePicker, parseFromDatePicker } from "~shared/util/dates";

const parseAmountFromInput = (value: string): number => {
  return Number(value.replace(/,/g, ""));
}

const emptyExpense: Expense = new Expense(0, 0, new Date(), null, "");

const categories: Category[] = [
  new Category(1, "Mercado"),
  new Category(2, "Lazer/iFood"),
  new Category(3, "Farmácia"),
  new Category(4, "Combustível"),
];

export const ExpenseForm: React.FC = () => {
  const [ expense, setExpense ] = React.useState<Expense>(emptyExpense);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(expense);
  }

  return (
    <form className="h-full" onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2}>
        <CurrencyInput
          label="Valor"
          name="amount"
          variant="outlined"
          value={expense.amount.toString()}
          onChange={({ target }) => {
            setExpense(e => e.setAmount(parseAmountFromInput(target.value)));
          }}
          required
          autoFocus
          onFocus={({ target }) => setTimeout(() => target.select(), 10)}
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
          value={parseForDatePicker(expense.date)}
          onChange={(date) => {
            date &&
            setExpense(e => e.setDate(parseFromDatePicker(date)!));
          }}
        />
        <TextField
          label="Descrição"
          name="description"
          variant="outlined"
          value={expense.description}
          onChange={({ target }) => {
            setExpense(e => e.setDescription(target.value));
          }}
        />
        <TextField
          label="Detalhes"
          name="details"
          variant="outlined"
          multiline
          value={expense.details}
          onChange={({ target }) => {
            setExpense(e => e.setDetails(target.value));
          }}
        />
        <Autocomplete
          disablePortal
          options={categories.map(String)}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              <CategoryIcon className="mr-2" />
              {option}
            </Box>
          )}
          value={expense.category?.name ?? null}
          onChange={(_, value) => {
            setExpense(e => e.setCategory(categories.find(c => c.name === value) || null));
          }}
          renderInput={(params) => <TextField {...params} name="category" label="Categoria" />}
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
