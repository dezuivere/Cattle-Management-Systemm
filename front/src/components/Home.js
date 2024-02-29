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
          Welcome to the Cattle Management System, your one-stop solution for efficient and organized management of your cattle farm. Our platform is designed to provide comprehensive details about your cattle, employees, and essential facilities, ensuring a seamless experience for farm owners.
        </p>

        <h3>Mission Statement</h3>
        <p>
          At Cattle Management System, our mission is to empower cattle farm owners with a user-friendly, feature-rich platform that simplifies the process of managing and monitoring their farms. We aim to enhance efficiency, promote transparency, and foster growth within the cattle farming community.
        </p>

        <h3>Features</h3>
        <ol>
          <li>
            <strong>Comprehensive Information:</strong> Access all the essential details about your cattle, including unique cow IDs, caretaker information, doctor details, and allocated room numbers. Stay informed about the well-being of each cow under your care.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our user interface is designed with simplicity in mind, making it easy for farm owners to navigate through varioussections such as customer details, cow details, room details, and more. Enjoy a hassle-free experience while managing your cattle farm.
          </li>
          <li>
            <strong>Add New Entries:</strong> Easily add new cows, doctors, employees, and other relevant details to keep your farm records up-to-date. Our platform allows you to seamlessly integrate new additions to your cattle farm without any complications.
          </li>
          <li>
            <strong>Customer Interaction:</strong> Enable potential customers to explore your cattle farm online. Visitors can log in as customers, view details of available cows, and even proceed with the purchase if interested. Facilitate a transparent and accessible process for potential buyers.
          </li>
        </ol>

        <h3>The Creators</h3>
        <p>
          Cattle Management System was passionately crafted by Tanya and Shwetha, dedicated students of Sahyadri College of Engineering & Management. As aspiring engineers, we undertook this project with the aim of applying our knowledge and skills to contribute to the agricultural community. Our dedication to excellence and innovation drove us to create a solution tailored to meet the specific needs of cattle farm owners.
        </p>

        <h3>How to Get Started</h3>
        <p>
          Getting started with the Cattle Management System is quick and easy. Simply log in to your account,navigate through the various options, and explore the features tailored to meet your farm management needs. Whether you are a seasoned cattle farm owner or a newcomer to the industry, our platform is designed to simplify your experience.
        </p>

        <h3>Contact Us</h3>
        <p>
          Have questions, feedback, or suggestions? We value your input! Contact our support team at [support@cattlemanagementsystem.com] for assistance. Your success in managing your cattle farm is our priority.
        </p>

        <p>
          Thank you for choosing Cattle Management System as your trusted partner in efficient cattle farm management!
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