import { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import NumeroPrimo from "./components/Memory/numeroPrimo";
import { About } from "./about/about";
import PhotoCards from "./components/Memory/PhotoCards";
import ProductCards from "./components/Memory/ProductCards";
import PrivateGuard from "./components/PrivateGuard";
import HomePage from "./components/Memory/HomePage";
import LoginPage from "./components/Memory/LoginPage";

interface Props {
  children?: ReactNode;
}

const Router = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components/Memory/LoginPage" element={<LoginPage />} />
        <Route
          path="/components/Memory/HomePage"
          element={
            <PrivateGuard isAuthenticated={true}>
              <HomePage />
            </PrivateGuard>
          }
        />
        <Route
          path="/components/Memory/ProductCards"
          element={<ProductCards />}
        />
        <Route path="/components/numeroPrimo" element={<NumeroPrimo />} />
        <Route path="/components/Memory/PhotoCards" element={<PhotoCards />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<Navigate to="/components/Memory/HomePage" replace />}
        />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default Router;
