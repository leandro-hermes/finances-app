import { useEffect } from "react";
import { useApp } from "../hooks/app";

export const Dashboard = () => {
  const { setTitle } = useApp();

  useEffect(() => {
    setTitle("Dashboard");
  });

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
