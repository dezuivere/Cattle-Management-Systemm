import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/ExtraDetails.css'

const ExtraDetails = () => {
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
  });
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
  });
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
  });
  return (
    <div className="details-flex">
      <div className="extra-details">
        <h3>Doctor details</h3>
        {cowDoc.map((doc, index) => (
          <div key={index}>
            <div>Doctor ID: {doc.d_id}</div>
            <div>Name: {doc.name}</div>
            <div>Contact: {doc.contact}</div>
            <div>Specialization: {doc.specialization}</div>
            <div>Hospital: {doc.hospital}</div>
            <br/>
            <a href="/doctor_list"><button  className="header">other Doctors</button></a>
          </div>
        ))}
      </div>
      
      <div className="extra-details">
      <h3>Caretaker details</h3>
        {cowCaretaker.map((caretaker, index) => (
          <div key={index}>
            <div>Caretaker ID: {caretaker.emp_id}</div>
            <div>Name: {caretaker.name}</div>
            <div>Age: {caretaker.age}</div>
            <div>SAddress: {caretaker.address}</div>
            <div>Salary: {caretaker.salary}</div>
            <div>Phone No: {caretaker.phone_no}</div>
            <br/>
            <a href="/employee_list"><button  className="header">Other Employees</button></a>
          </div>
        ))}
      </div>
      <div className="extra-details">
      <h3>Room details</h3>
        {cowRoom.map((room, index) => (
          <div key={index}>
            <div>Room No: {room.room_no}</div>
            <div>Water Supply: {room.water_supply}</div>
            <div>Food Supply: {room.food_supply}</div>
            <div>Capacity: {room.capacity}</div>
            <br/>
            <a href="/rooms_list"><button  className="header">other rooms</button></a>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default ExtraDetails;
