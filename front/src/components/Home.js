import React, { useState } from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import AdminNotifications from "./AdminNotification";
import CattleList from "./CattleList";
import DoctorsList from "./DoctersList";
import EmployeeList from "./EmployeeList";
import RoomsList from "./RoomsList";

const Homepage = () => {
  const [selected, setSelected] = useState(null);
  var loginData = localStorage.getItem("loginData");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleItemClick = (item) => {
    setSelected(item);
  };

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  let content = (
    <div className="about-us-box">
      <p className="about_text">
      <Typewriter
        options={{
          strings: [
            'Hey there, welcome to our Cattle Management System! We\'re all about making farm life easier for you. Our platform is your go-to for keeping track of everything on your cattle farm, from cow details and employee info to room allocations. Want to add a new cow or doctor? No problem, it\'s easy-peasy! Plus, potential customers can check out your cows online and even make a purchase. We\'re Tanya and Shwetha, two engineering students who are passionate about agriculture and technology. We\'ve created this platform to simplify farm management and help you grow your business. So, log in, explore, and let us know if you need any help along the way!',
            '',
          ],
          autoStart: true,
          loop: true,
          cursor: "𝗜",
          delay: 50,
          pauseFor: 50000,
        }}
      />
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
  } else if (selected === "notify") {
    content = <AdminNotifications />;
  }
  if (isAdmin === true) {
    loginData = "Admin";
  }

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Cattle.io</h1>
        <ul>
          <button className="btn" onClick={() => handleItemClick("cattlelist")}>
            Cattle List
          </button>
          <br />
          <button
            className={`btn ${isAdmin ? "" : "disabled"}`}
            onClick={() => handleItemClick("doctorlist")}
            disabled={!isAdmin || isAuthenticated}
          >
            Doctors List
          </button>
          <br />
          <button
            className={`btn ${isAdmin ? "" : "disabled"}`}
            onClick={() => handleItemClick("employeelist")}
            disabled={!isAdmin || isAuthenticated}
          >
            Employee List
          </button>
          <br />
          <button
            className={`btn ${isAdmin ? "" : "disabled"}`}
            onClick={() => handleItemClick("roomlist")}
            disabled={!isAdmin || isAuthenticated}
          >
            Room List
          </button>
          <button
            className={`btn ${isAdmin ? "" : "disabled"}`}
            onClick={() => handleItemClick("notify")}
            disabled={!isAdmin || isAuthenticated}
          >
            notifications
          </button>
          <br />
          <div className="login-info">
            <p>
              <b>Logged in as: {loginData}</b>
            </p>
            <button className="logt" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Homepage;
