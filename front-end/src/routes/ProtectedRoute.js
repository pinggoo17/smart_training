import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ redirectPath = "/home" }) {
  if (localStorage.getItem("username") === null) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
