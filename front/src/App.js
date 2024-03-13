import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddCattleForm from "./components/AddCattle";
import AddDoctor from "./components/AddDoctor";
import AddEmployee from "./components/AddEmployee";
import ExtraDetails from "./components/ExtraDetails";
import AddRoom from "./components/AddRoom";
import Login from "./Aouth/Login";
import Signup from "./Aouth/Signup";
import AdminAuth from "./Aouth/AdminAuth";
import HomePage from "./components/HomePage";
import LoginAuth from "./Aouth/LoginAuth";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginAuth />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Route>
          {/* <Route element={<AdminLogin/>} path='/login'/> */}
          <Route element={<AdminAuth />}>
            <Route element={<ExtraDetails />} path="/extra_details" />
            <Route element={<HomePage />} path="/" />
            <Route element={<AddDoctor />} path="/add_doctor" />
            <Route element={<AddCattleForm />} path="/add_Cattle" />
            <Route element={<AddEmployee />} path="/add_employee" />
            <Route element={<AddRoom />} path="/add_room" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
