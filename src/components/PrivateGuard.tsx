// import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

// interface Props {
//   children: ReactNode;
// }

// const PrivateGuard = ({ children }: Props) => {
//   const logged = false;
//   return logged ? children : <Navigate to="/about" replace />;
// };

// export default PrivateGuard;

import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

function PrivateRoute({ children, isAuthenticated }: PrivateRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export default PrivateRoute;
