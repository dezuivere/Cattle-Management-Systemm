import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LoginAuth = () => {
  const auth = localStorage.getItem("loginData")
  return auth?<Navigate to = '/'/>:<Outlet/>
}

export default LoginAuth