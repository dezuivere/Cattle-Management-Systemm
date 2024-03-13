import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminAuth = () => {
  const auth = localStorage.getItem("auth");
  const login = localStorage.getItem("loginData");
  console.log(login, auth)
  return auth == 1 ? (
    <>
      {console.log("testing auth")}
      <Outlet /></>
  ) :
    <>
      {console.log("testing auth fail")}
      <Navigate to="/" />
    </>

};

export default AdminAuth;
