import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const isAdmin = localStorage.getItem("asAdmin");
  const isProvider = localStorage.getItem("asProvider");
  const isUser = localStorage.getItem("asUser");

  // Not logged in (no token)
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" replace />;
  }

  // Role-based protection
  if (role === "admin" && !isAdmin) {
    return <Navigate to="/" replace />;
  }
  if (role === "provider" && !isProvider) {
    return <Navigate to="/" replace />;
  }
  if (role === "user" && !isUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
