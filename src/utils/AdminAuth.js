import { Outlet, Navigate } from "react-router-dom";

export const AdminProtectedRoute = () => {
  const admin = localStorage.getItem("adminAuthenticated");
  return admin ? <Outlet /> : <Navigate to="/admin/login" />;
};
