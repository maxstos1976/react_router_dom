import React, { createContext, useContext, ReactNode } from "react";

// Definição do contexto
const UserContext = createContext(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
