import React, { useState } from "react";
import "../styles/Home.css";
import CattleList from "./CattleList";
import DoctorsList from "./DoctersList";
import EmployeeList from "./EmployeeList";
import RoomsList from "./RoomsList";

const Homepage = () => {
  const [selected, setSelected] = useState(null);

  const handleItemClick = (item) => {
    setSelected(item);
  };

  let content = null;
  if (selected === "cattlelist") {
    content = <CattleList />;
  } else if (selected === "doctorlist") {
    content = <DoctorsList />;
  } else if (selected === "employeelist") {
    content = <EmployeeList />;
  } else if (selected === "roomlist") {
    content = <RoomsList />;
  }

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Cattle.io</h1>
        <ul>
            <div onClick={() => handleItemClick("cattlelist")}><li>Cattle List</li></div>
            <div onClick={() => handleItemClick("doctorlist")}><li>Doctor List</li></div>
            <div onClick={() => handleItemClick("employeelist")}><li>Employee List</li></div>
            <div onClick={() => handleItemClick("roomlist")}><li>Room List</li></div>
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Homepage;
