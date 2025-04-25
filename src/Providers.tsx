import { ReactNode } from "react";
import { UserProvider } from "./UserContext"; // ou o caminho correto onde o UserProvider está definido

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
