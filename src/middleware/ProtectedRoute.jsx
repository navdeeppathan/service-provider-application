import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("asAdmin");
  const isProvider = localStorage.getItem("asProvider");
  const isUser = localStorage.getItem("asUser");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin" && !isAdmin) return <Navigate to="/login" replace />;
  if (role === "provider" && !isProvider) return <Navigate to="/login" replace />;
  if (role === "user" && !isUser) return <Navigate to="/login" replace />;

  return children;
};


export default ProtectedRoute;
