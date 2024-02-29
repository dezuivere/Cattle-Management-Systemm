import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import AddCattleForm from "./components/AddCattle";
import CattleList from "./components/CattleList";
import DoctorList from "./components/DoctersList";
import AddDoctor from "./components/AddDoctor";
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import ExtraDetails from './components/ExtraDetails';
import RoomsList from './components/RoomsList';
import AddRoom from './components/AddRoom';
import Home from './components/Home';
import Mainpage from './components/Mainpage'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<AddDoctor />} path='/add_doctor' />
        <Route element={<AddCattleForm />} path='/add_Cattle' />
        <Route element={<CattleList />} path='/cattle_list' />
        <Route element={<Home/>} path='/home' />
        <Route element={<DoctorList />} path='/doctor_list' />
        <Route element={<RoomsList/>} path='/rooms_list' />
        <Route element={<ExtraDetails />} path='/extra_details' />
        <Route element={<EmployeeList/>} path='employee_list'/>
        <Route element={<AddEmployee/>} path='/add_employee'/>
        <Route element={<AddRoom/>} path='/add_room'/>
        <Route element={<Mainpage/>} path='/'/>
        
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
