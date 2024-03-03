import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CattleList.css";
import Modal from "./Modal";
import cow1 from "./cow1.jpg";
import cow2 from "./cow2.jpg";


const CattleList = () => {
  const [cattle, setCattle] = useState([]);
  const [selectedCow, setSelectedCow] = useState(null);
  function getExtraDetails() {
    window.location.href = "/extra_details"
  }
  const handleCowClick = (cow) => {
    setSelectedCow(cow);
    localStorage.setItem("selectedCow",cow.cow_id);
  };
  function clickHandle() {
    window.location.href = "/add_cattle";
  }
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((response) => {
        setCattle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cattle data:", error);
      });
  }, []);

  const sendMail = async () => {
    const email = localStorage.getItem('email'); // Fetch email from localStorage
    try {
        const response = await fetch('/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: email,
                subject: 'Test Email',
                text: 'This is a test email sent from your Cattle Management System.'
            })
        });
        const data = await response.json();
        console.log('Email sent:', data);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

  return (
    <div className="cattle-list">
      <div className="cattle-head">
        <div><b><h2>CATTLE LIST</h2></b></div>
        <div className="test1" onClick={() => clickHandle()}>
          <button className="header">+</button>
        </div>
      </div>

      <div className="cattle-container">
        {cattle.map((cow) => (
          <div
            key={cow.cow_id}
            className="cow-item"
            onClick={() => handleCowClick(cow)}
          >
            <img id="img" src={cow2} alt="Cow" />
            <div className="cow-info">
              <div><b>Breed</b>  : {cow.breed}</div>
              <div><b>price :</b>  {cow.price}</div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={selectedCow !== null} onClose={() => setSelectedCow(null)}>
        {selectedCow && (
          <div className="cow-details">
            <div className="image-container">
              <img src={cow1} alt="Cow" />
            </div>
            <div className="details-container">
              {/* <div>ID: {(localStorage.getItem("selectedCow"))}</div> */}
              <div><b>Age:</b> {selectedCow.age}</div>
              <div><b>Gender:</b> {selectedCow.gender}</div>
              <div><b>Health:</b> {selectedCow.health}</div>
              <div><b>Weight:</b> {selectedCow.weight}</div>
              <div><b>Color:</b> {selectedCow.color}</div>
              <div><b>Breed:</b> {selectedCow.breed}</div>
              <div><b>Birth Date:</b> {selectedCow.birth_date}</div>
              <div><b>Vaccination: </b>{selectedCow.last_vaccination}</div>
              <div><b>Price:</b> {selectedCow.price}</div>
              <div>
                <button className="header" onClick={()=>getExtraDetails()}><b>Extra Details</b></button>
                <button onClick={sendMail}>Send Email</button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CattleList;
