import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Home.css';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  function handleAccept() {
    const email = localStorage.getItem("loginData");
    const cowId = 1;

    axios
      .post("http://localhost:8080/notifyAdmin", { email, cowId })
      .then((response) => {
        alert("confirm notification sent to user");
      })
      .catch((error) => {
        console.error("Error sending purchase request:", error);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/notifications")
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);
  useEffect(()=>{
    console.log(notifications)
  },[notifications])
  return (
    <div className="notifications-container">
    <h2 className="notifications-heading">Admin Notifications</h2>
    <ul>
      {notifications.map((notification, index) => (
        <li key={index} className="notification-item">
          {notification.message}<button onClick={handleAccept}>accept</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default AdminNotifications;
