import React from "react";

export type AppContextProps = {
  children: React.ReactNode;
  title: string;
  setTitle: (title: string) => void;
};

export const AppContext = React.createContext<AppContextProps>({} as AppContextProps);
