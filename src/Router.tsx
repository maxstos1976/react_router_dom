import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import NumeroPrimo from "./components/Memory/numeroPrimo";
import { About } from "./about/about";

interface Props {
  children?: ReactNode;
}

const Router = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components/numeroPrimo" element={<NumeroPrimo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default Router;
