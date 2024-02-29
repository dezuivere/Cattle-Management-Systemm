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

  let content = (
    <div className="about-us-box">
      <h2>About Us</h2>
      <p>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        finibus, nisi eu fermentum venenatis, augue elit mollis dolor, ut
        condimentum quam tellus ac lacus. Vivamus in felis sit amet mi luctus
        fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Sed quis velit nisl. Suspendisse
        potenti. Aliquam erat volutpat. Sed posuere ac arcu vitae cursus. Fusce
        vel dictum libero. Ut faucibus mi vitae mi accumsan, eget pulvinar neque
        fermentum. Duis vitae elit justo. Ut ac nunc sit amet nulla eleifend
        efficitur. Curabitur commodo, lacus vel tincidunt tristique, arcu velit
        finibus lectus, sit amet bibendum mi eros a dui. Cras vehicula orci ut
        tortor dictum, vitae malesuada lacus feugiat. Pellentesque nec
        scelerisque ipsum. Sed non quam et sapien tincidunt vulputate. Nullam
        elementum nunc nec est commodo, ac gravida urna posuere. Sed sed eros
        malesuada, fermentum nisi sed, fringilla purus. Aenean ut sollicitudin
        elit. Maecenas varius quam nec risus dictum fringilla. Etiam a eros
        dictum, feugiat velit in, tempor odio. Donec vel erat non nisi eleifend
        pharetra a nec risus. Curabitur feugiat purus et velit efficitur, a
        varius dolor facilisis. Proin vehicula neque ac augue pulvinar faucibus.
        Mauris venenatis, lacus a vehicula luctus, libero leo dignissim ligula,
        vitae fermentum nunc mauris et odio. Sed eleifend, turpis ac tempus
        feugiat, nisi eros tristique nulla, vitae pellentesque justo urna ac
        mauris. Integer quis vestibulum justo. Phasellus non ligula eget nulla
        eleifend egestas. Quisque in sem sed ex faucibus tincidunt ac id magna.
        Ut id placerat tellus, eu molestie arcu. Integer accumsan, dolor non
        elementum bibendum, lorem sem ultricies mi, vel consequat purus sem id
        enim. Proin nec nunc sed dui efficitur vehicula at ut dui. Donec at eros
        eget nisi malesuada scelerisque id eget mi. Nam lacinia nisi et nisi
        posuere, nec cursus elit rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Maecenas et cursus enim. Cras at dolor ac turpis malesuada
        varius nec et dolor. Ut a risus sed elit malesuada consectetur. Nam vel
        ante est. Sed vel nisl id arcu congue vehicula. Donec euismod quam eget
        ultrices convallis. Phasellus interdum augue ut feugiat fringilla. Duis
        vitae turpis a erat dapibus elementum a sit amet mi. Vivamus elementum
        nisi a nulla tempus
        enim. Proin nec nunc sed dui efficitur vehicula at ut dui. Donec at eros
        eget nisi malesuada scelerisque id eget mi. Nam lacinia nisi et nisi
        posuere, nec cursus elit rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Maecenas et cursus enim. Cras at dolor ac turpis malesuada
        varius nec et dolor. Ut a risus sed elit malesuada consectetur. Nam vel
        ante est. Sed vel nisl id arcu congue vehicula. Donec euismod quam eget
        ultrices convallis. Phasellus interdum augue ut feugiat fringilla. Duis
        vitae turpis a erat dapibus elementum a sit amet mi. Vivamus elementum
        nisi a nulla tempus
        enim. Proin nec nunc sed dui efficitur vehicula at ut dui. Donec at eros
        eget nisi malesuada scelerisque id eget mi. Nam lacinia nisi et nisi
        posuere, nec cursus elit rutrum. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse
        potenti. Maecenas et cursus enim. Cras at dolor ac turpis malesuada
        varius nec et dolor. Ut a risus sed elit malesuada consectetur. Nam vel
        ante est. Sed vel nisl id arcu congue vehicula. Donec euismod quam eget
        ultrices convallis. Phasellus interdum augue ut feugiat fringilla. Duis
        vitae turpis a erat dapibus elementum a sit amet mi. Vivamus elementum
        nisi a nulla tempus
        
        </h2>
        
      </p>
    </div>
  );
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
          <div onClick={() => handleItemClick("cattlelist")}>
            <li>Cattle List</li>
          </div>
          <div onClick={() => handleItemClick("doctorlist")}>
            <li>Doctor List</li>
          </div>
          <div onClick={() => handleItemClick("employeelist")}>
            <li>Employee List</li>
          </div>
          <div onClick={() => handleItemClick("roomlist")}>
            <li>Room List</li>
          </div>
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Homepage;
