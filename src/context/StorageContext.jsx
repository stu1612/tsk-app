import { createContext, useReducer } from "react";

export const StorageContext = createContext();

export function storageReducer(state, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, user_token: action.payload };
    case "REMOVE_TOKEN":
      return { ...state, user_token: null };
    default:
      return state;
  }
}

export default function StorageProvider({ children }) {
  const [state, dispatch] = useReducer(storageReducer, {
    user_token: null,
  });
  return (
    <StorageContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StorageContext.Provider>
  );
}
