// This file defines the global state of the application

import React, { createContext } from "react";
import { useImmer } from "use-immer";

const initialState = {
  transactions: [],
};

// Create the app context from the initial state
export const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  /* useImmer is a hook of immerjs that takes the innital state
  and returns a new state and an updater functcion */
  const [state, updateAccount] = useImmer({ ...initialState });

  // pass the state and the updater function in the provider
  return (
    <AppContext.Provider value={[state, updateAccount]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
