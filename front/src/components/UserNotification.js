import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Home.css';

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/usernotifications")
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
    <div className="notifications-container">
    <h2 className="notifications-heading">Admin Notifications</h2>
    <ul>
      {notifications.map((notification, index) => (
        <li key={index} className="notification-item">
          {notification.message}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default UserNotifications;