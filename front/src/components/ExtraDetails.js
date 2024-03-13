import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/ExtraDetails.css'
import employeeImg from './employee.jpg'
import doc from './doc1.jpg';
import room from './room.jpg';
import { useNavigate } from "react-router-dom";

const ExtraDetails = () => {
  const navigate = useNavigate();
  const [currentCow, setCurrentCow] = useState("");
  const [cowDoc, setCowDoc] = useState([]);
  const [cowCaretaker,setCowCaretaker]=useState([]);
  const [cowRoom,setCowRoom]=useState([]);
  useEffect(() => {
    setCurrentCow(localStorage.getItem("selectedCow"));
  }, []);
  useEffect(() => {
    const callCowDoc = async () => {
      const response = await axios.post(
        "http://localhost:8080/get_doctor_specific_details",
        {
          id: currentCow,
        }
      );
      setCowDoc(response.data);
    };
    callCowDoc();
  },[]);
  useEffect(() => {
    const callCowCaretaker = async () => {
      const response = await axios.post(
        "http://localhost:8080/get_caretaker_specific_details",
        {
          id: currentCow,
        }
      );
      setCowCaretaker(response.data);
    };
    callCowCaretaker();
  },[]);
  useEffect(() => {
    const callCowRoom = async () => {
      const response = await axios.post(
        "http://localhost:8080/get_room_specific_details",
        {
          id: currentCow,
        }
      );
      setCowRoom(response.data);
    };
    callCowRoom();
  },[]);
  function handleBack() {
    window.history.back();
  }
  return (
    <div className="details-flex">
        <button onClick={()=>handleBack()}><b> Back </b></button>
      <div className="extra-details">
        <h3>Doctor details</h3>
        <div className="image-container">
              <img src={doc} alt="Cow" />
            </div>
        {cowDoc.map((doc, index) => (
          <div key={index}>
            <div><b>Name:</b> {doc.name}</div>
            <div><b>Contact: </b>{doc.contact}</div>
            <div><b>Specialization:</b> {doc.specialization}</div>
            <div><b>Hospital:</b> {doc.hospital}</div>
            <br/>
          </div>
        ))}
      </div>
      
      <div className="extra-details">
      <h3>Caretaker details</h3>
      <div className="image-container">
              <img src={employeeImg} alt="Cow" />
            </div>
        {cowCaretaker.map((caretaker, index) => (
          <div key={index}>
            <div><b>Name:</b> {caretaker.name}</div>
            <div><b>Age: </b>{caretaker.age}</div>
            <div><b>SAddress:</b> {caretaker.address}</div>
            <div><b>Salary: </b>{caretaker.salary}</div>
            <div><b>Phone No:</b> {caretaker.phone_no}</div>
            <br/>
          </div>
        ))}
      </div>
      <div className="extra-details">
      <h3>Room details</h3>
      <div className="image-container">
              <img src={room} alt="Cow" />
            </div>
        {cowRoom.map((room, index) => (
          <div key={index}>
            <div><b>Room No:</b> {room.room_no}</div>
            <div><b>Water Supply:</b> {room.water_supply}</div>
            <div><b>Food Supply:</b> {room.food_supply}</div>
            <div><b>Capacity:</b> {room.capacity}</div>
            <br/>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default ExtraDetails;
