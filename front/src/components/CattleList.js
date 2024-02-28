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

  return (
    <div className="cattle-list">
      <div className="cattle-head">
        <div><h2>CATTLE LIST</h2></div>
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
              <div> Breed : {cow.breed}</div>
              <div> price : {cow.price}</div>
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
              <div>Age: {selectedCow.age}</div>
              <div>Gender: {selectedCow.gender}</div>
              <div>Health: {selectedCow.health}</div>
              <div>Weight: {selectedCow.weight}</div>
              <div>Color: {selectedCow.color}</div>
              <div>Breed: {selectedCow.breed}</div>
              <div>Birth Date: {selectedCow.birth_date}</div>
              <div>Vaccination: {selectedCow.last_vaccination}</div>
              <div>Price: {selectedCow.price}</div>
              <div>
                <button className="header" onClick={()=>getExtraDetails()}>Extra Details</button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CattleList;
