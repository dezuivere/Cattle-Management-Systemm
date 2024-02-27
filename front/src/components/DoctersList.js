import "../styles/DoctorList.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import doc from "./doc1.jpg";

const DoctersList = () => {
  const [doctor, setDoctor] = useState([]);

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
        <div>Doctor LIST</div>
        <div className="test1" onClick={() => clickHandle()}>
          Add doctor
        </div>
      </div>

      <div className="cattle-container">
        {doctor.map((doctor) => (
          <div
            key={doctor.cow_id}
            className="cow-item"
            // onClick={() => handleCowClick(doctor)}
          >
            <img id="img" src={doc} alt="doctor" />
            <div className="cow-info">
              <div> d_id: {doctor.d_id}</div>
              <div> Name : {doctor.name}</div>
              <div> Contact : {doctor.contact}</div>
              <div> Specialisation : {doctor.specialisation}</div>
              <div> Hospital : {doctor.hospital}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctersList;
