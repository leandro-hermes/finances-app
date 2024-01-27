import { useEffect } from "react";
import { useApp } from "~hooks/app";
import { ExpenseForm } from "./scope/ExpenseForm.tsx";


export const Home = () => {
  const { setTitle } = useApp();

  useEffect(() => {
    setTitle("Nova despesa");
  });

  return (
    <div className="p-4 h-full relative">
      <ExpenseForm />
    </div>
  )
};
