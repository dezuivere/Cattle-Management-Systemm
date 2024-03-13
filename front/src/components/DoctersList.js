import "../styles/CattleList.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import doc from "./doc1.jpg";
import Modal from "./Modal";

const DoctersList = () => {
  const [doctor, setDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    // localStorage.setItem("selectedCow",cow.cow_id);
  };

  function clickHandle() {
    window.location.href = "/add_doctor";
  }
// 
  useEffect(() => {
    axios
      .get("http://localhost:8080/doctor_list")
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cattle data:", error);
      });
  }, []);

  return (
    <div className="cattle-list">
      <div className="cattle-head">
        <div><h2>DOCTOR LIST</h2></div>
        <div className="test1" onClick={() => clickHandle()}>
          <button className="header">+</button>
        </div>
      </div>

      <div className="cattle-container">
        {doctor.map((doctor) => (
          <div
            key={doctor.cow_id}
            className="cow-item"
            onClick={() => handleDoctorClick(doctor)}
          >
            <img id="img" src={doc} alt="doctor" />
            <div className="cow-info">
              {/* <div> d_id: {doctor.d_id}</div> */}
              <div> Name : {doctor.name}</div>
              {/* <div> Contact : {doctor.contact}</div>
              <div> Specialisation : {doctor.specialization}</div>
              <div> Hospital : {doctor.hospital}</div> */}
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={selectedDoctor !== null} onClose={() => setSelectedDoctor(null)}>

        {selectedDoctor && (
          <div className="cow-details">
            <div className="image-container">
              <img src={doc} alt="Cow" />
            </div>
            <div className="details-container">
              {/* <div>ID: {selectedDoctor.d_id}</div> */}
              <div><b>Name:</b> {selectedDoctor.name}</div>
              <div><b>Contact:</b> {selectedDoctor.contact}</div>
              <div><b>Specialisation:</b> {selectedDoctor.specialization}</div>
              <div><b>Hospital :</b> {selectedDoctor.hospital}</div>
              {/* <div>
                <button className="header" onClick={()=>getExtraDetails()}>Extra Details</button>
              </div> */}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DoctersList;
