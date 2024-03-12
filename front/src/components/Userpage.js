import React, { useState } from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";
import CattleList from "./CattleList";

const Homepage = () => {
  const [selected, setSelected] = useState(null);
  var loginData = localStorage.getItem("loginData");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleItemClick = (item) => {
    setSelected(item);
  };

  const handle = (item) => {
    setSelected(item);
  };

  function handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  let content = <CattleList />;
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
  }else if(selected==="contact"){
    content = (
        <div className="about-us-box">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br />
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" /><br />
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" /><br />
          <button onClick={handle} type="submit">Submit</button>
        </form>
      </div>
      );
  }


  if (isAdmin === true) {
    loginData = "Admin";
  }

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Cattle.io</h1>
        <ul>
          <button className="btn" onClick={() => handleItemClick("about")}>
            Aboutt   
          </button>
          <br />
          <button className="btn btn-abt" onClick={() => handleItemClick("contact")}>
            contact
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
