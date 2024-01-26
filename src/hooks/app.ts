import React from "react";
import { AppContext } from "../context/app.context.tsx";

export const useApp = () => React.useContext(AppContext);
