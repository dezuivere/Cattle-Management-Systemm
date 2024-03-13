import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminAuth = () => {
  const auth = localStorage.getItem("auth");
  const login = localStorage.getItem("loginData");
  console.log(login)
  return login ? (
    auth === 1 ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminAuth;
