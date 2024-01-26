import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { AppProvider } from "./context/app.provider.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Home } from "./pages/Home.tsx";
import { Root } from "./pages/Root.tsx";
import { Settings } from "./pages/Settings.tsx";
import "dayjs/locale/pt-br";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </LocalizationProvider>
  </React.StrictMode>,
)
