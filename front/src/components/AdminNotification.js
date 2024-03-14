import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Home.css';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  function handleAccept(x) {
    const email = localStorage.getItem("loginData");
    console.log(x)
    // if (!x) {
    //   return
    // }
    axios
      .post("http://localhost:8080/buyCow", { email, x })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("Error sending purchase request:", error);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/notifications")
      .then((response) => {
      console.log(response.data)
        setNotifications(response.data,"Nada");
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  });

  return (
    <div className="notifications-container">
    <h2 className="notifications-heading">Admin Notifications</h2>
    <ul>
      {notifications.map((notification, index) => (
        <li key={index} className="notification-item">
          User with email {notification.email} wants to buy cow {notification.cow_id}<button onClick={()=>handleAccept(notification.cow_id)}>accept</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default AdminNotifications;
