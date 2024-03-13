import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const CheckLogin = () => {
    const id = localStorage.getItem("loginData")
    return id?<Outlet/>:<Navigate to = "/login"/>
}

export default CheckLogin