// This component is used to redirect unauthenticated users to the login page
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticationStore } from "../stores";

const ProtectedRoute = ({ element }: { element: ReactNode }) => { // *element* is the react component to be rendered
  const { isAuthenticated } = useAuthenticationStore();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;