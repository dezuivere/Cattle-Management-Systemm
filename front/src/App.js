import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import AddCattleForm from "./components/AddCattle";
import CattleList from "./components/CattleList"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<AddCattleForm />} path='/add_Cattle' />
        <Route element={<CattleList />} path='/' />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
