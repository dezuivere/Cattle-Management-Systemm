import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import AddCattleForm from "./components/AddCattle";
import CattleList from "./components/CattleList";
import DoctorList from "./components/DoctersList";
import AddDoctor from "./components/AddDoctor";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<AddDoctor />} path='/add_doctor' />
        <Route element={<AddCattleForm />} path='/add_Cattle' />
        <Route element={<CattleList />} path='/' />
        <Route element={<DoctorList />} path='/doctor_list' />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
