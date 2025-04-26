import React, { createContext, useContext, ReactNode } from "react";

// Definição do contexto
const UserContext = createContext(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
