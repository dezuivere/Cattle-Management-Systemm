import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import AddCattleForm from "./components/AddCattle";
import AddDoctor from "./components/AddDoctor";
import AddEmployee from './components/AddEmployee';
import ExtraDetails from './components/ExtraDetails';
import AddRoom from './components/AddRoom';
import Home from './components/Home';
import AdminLogin from './Aouth/AdminLogin'
import Login from './Aouth/Login';
import Signup from './Aouth/Signup';
import AdminNotifications from './components/AdminNotification';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<AddDoctor />} path='/add_doctor' />
        <Route element={<AddCattleForm />} path='/add_Cattle' />
        <Route element={<Home/>} path='/home' />
        <Route element={<ExtraDetails />} path='/extra_details' />
        <Route element={<AddEmployee/>} path='/add_employee'/>
        <Route element={<AddRoom/>} path='/add_room'/>
        <Route element={<Login/>} path='/'/>
        <Route element={<Signup/>} path='/signup'/>
        <Route element={<AdminLogin/>} path='/login'/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
