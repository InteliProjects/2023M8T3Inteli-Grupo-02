// MyContext.js
import React, { useState } from "react";



const initialState: any = ""

export const HistoryContext = React.createContext(initialState);

export const HistoryProvider = ({ children }: any) => {
  const [historyState, setHistoryState] = useState(initialState);

  return (
    <HistoryContext.Provider value={{ historyState, setHistoryState }}>
      {children}
    </HistoryContext.Provider>
  );
};