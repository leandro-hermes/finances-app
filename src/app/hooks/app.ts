import React from "react";
import { AppContext } from "~context/app.context";

export const useApp = () => React.useContext(AppContext);
