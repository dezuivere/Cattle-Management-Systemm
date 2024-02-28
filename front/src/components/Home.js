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
        <h1>CMS</h1>
        <ul>
          <li>
            <div onClick={() => handleItemClick("cattlelist")}>Cattle List</div>
          </li>
          <li>
            <div onClick={() => handleItemClick("doctorlist")}>Doctor List</div>
          </li>
          <li>
            <div onClick={() => handleItemClick("employeelist")}>Employee List</div>
          </li>
          <li>
            <div onClick={() => handleItemClick("roomlist")}>Room List</div>
          </li>
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Homepage;
