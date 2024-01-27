import React, { useEffect } from "react";
import { AppContext } from "./app.context";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [ title, setTitle ] = React.useState<string>(document.title);

  useEffect(() => {
    document.title = title;
  }, [ title ]);

  const defineTitle = React.useCallback((title: string) => {
    if (!title.endsWith(" | Hermes")) {
      title = `${title} | Hermes`;
    }

    setTitle(title);
  }, []);

  return (
    <AppContext.Provider value={{ children, title, setTitle: defineTitle }}>
      {children}
    </AppContext.Provider>
  );
};
