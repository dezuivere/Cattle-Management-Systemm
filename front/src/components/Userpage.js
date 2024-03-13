import React, { useState } from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import CattleList from "./CattleList";
import { useLocation } from "react-router-dom";

const Userpage = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  var loginData = localStorage.getItem("loginData");

  const handleItemClick = (item) => {
    setSelected(item);
  };

  const handle = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const form = event.target.closest("form"); // Find the closest form element
    if (!form) return; // If form not found, do nothing
    const formData = new FormData(form); // Use the form element to create FormData
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    form.reset(); // Reset the form fields
  };

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  let content = (
    <div>
      <CattleList />
    </div>
  );
  if (selected === "about") {
    content = (
      <div className="about-us-box">
        <h2>AboutUS</h2>
        <p className="about_text">
          <Typewriter
            options={{
              strings: [
                "Hey there, welcome to our Cattle Management System! We're all about making farm life easier for you. Our platform is your go-to for keeping track of everything on your cattle farm, from cow details and employee info to room allocations. Want to add a new cow or doctor? No problem, it's easy-peasy! Plus, potential customers can check out your cows online and even make a purchase. We're Tanya and Shwetha, two engineering students who are passionate about agriculture and technology. We've created this platform to simplify farm management and help you grow your business. So, log in, explore, and let us know if you need any help along the way!",
                "",
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
  } else if (selected === "contact") {
    content = (
      <div className="about-us-box">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="4" />
          <br />
          <button className="btn" onClick={handle} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  } else if (selected === "cattle") {
    content = <CattleList />;
  }

  return (
    <>
      <div className="sidebar">
        <h1 onClick={() => handleItemClick("about")}>Cattle.io</h1>
        {/* <ul> */}
        <button className="btn" onClick={() => handleItemClick("cattle")}>
          Cattles
        </button>
        <br />
        <button className="btn" onClick={() => handleItemClick("about")}>
          About
        </button>
        <br />
        <button className="btn " onClick={() => handleItemClick("contact")}>
          contact
        </button>
        <br />
        <h2>Logged in as : {loginData} </h2>
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
        {/* </ul> */}
      </div>
      <div className="container">
        <div className="content">
          {content}
          {/* <footer className="footer">
          <p>&copy; 2022 Cattle.io. All Rights Reserved.</p>
        </footer> */}
        </div>
      </div>
    </>
  );
};

export default Userpage;
