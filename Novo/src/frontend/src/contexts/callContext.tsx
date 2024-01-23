// MyContext.js
import React, {useState} from "react";

const initialState: any = [
  {
    name: "Category 1",
    acuracy: 0.8,
  },
  {
    name: "Category 2",
    acuracy: 0.8,
  },
  {
    name: "Category 3",
    acuracy: 0.8,
  },
  true,
];

export const CallContext = React.createContext(initialState);

export const MyProvider = ({ children }: any) => {
  const [state, setState] = useState(initialState);

  return (
    <CallContext.Provider value={{ state, setState }}>
      {children}
    </CallContext.Provider>
  );
};