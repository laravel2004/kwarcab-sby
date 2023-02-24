import { createContext, useReducer } from "react";
import { Action, ContextType, Props, State } from "../utils/data-type";

const initialState: State = {
  items: [],
};

const RootContext = createContext({} as ContextType);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD":
      console.log("hadajhd");
      return state;
    default:
      return state;
  }
};

const Reducer = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  return (
    <RootContext.Provider value={value}>
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, Reducer };
