import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/" replace />;
};
