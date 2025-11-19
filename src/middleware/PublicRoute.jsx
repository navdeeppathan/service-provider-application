import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("asAdmin");
  const isProvider = localStorage.getItem("asProvider");
  const isUser = localStorage.getItem("asUser");

  if (isAdmin) return <Navigate to="/admindashboard" replace />;
  if (isProvider) return <Navigate to="/providerdashboard" replace />;
  if (isUser) return <Navigate to="/" replace />;

  return children; // user not logged in
};

export default PublicRoute;
