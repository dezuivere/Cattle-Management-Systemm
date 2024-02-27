import "../styles/RoomsList.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import roomimg from "./room.jpg";
import Modal from "./Modal";

const RoomsList = () => {
    const [room, setRoom] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
  
    const handleRoomClick = (room) => {
      setSelectedRoom(room);
      // localStorage.setItem("selectedCow",cow.cow_id);
    };
  
    function clickHandle() {
      window.location.href = "/add_room";
    }
  // 
    useEffect(() => {
      axios
        .get("http://localhost:8080/room_list")
        .then((response) => {
          setRoom(response.data);
        })
        .catch((error) => {
          console.error("Error fetching room data:", error);
        });
    }, []);
  
    return (
      <div className="cattle-list">
        <div className="cattle-head">
          <div><h2>ROOM LIST</h2></div>
          <div className="test1" onClick={() => clickHandle()}>
            <button className="header">+</button>
          </div>
        </div>
  
        <div className="cattle-container">
          {room.map((room) => (
            <div
              key={room.room_no}
              className="cow-item"
              onClick={() => handleRoomClick(room)}
            >
              <img id="img" src={roomimg} alt="doctor" />
              <div className="cow-info">
                <div> Room Number: {room.room_no}</div>
               
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={selectedRoom !== null} onClose={() => setSelectedRoom(null)}>
  
          {selectedRoom && (
            <div className="cow-details">
              <div className="image-container">
                <img src={roomimg} alt="Cow" />
              </div>
              <div className="details-container">
                <div>Room no: {selectedRoom.room_no}</div>
                <div>Water Supply: {selectedRoom.water_supply}</div>
                <div>Food Supply: {selectedRoom.food_supply}</div>
                <div>Capacity: {selectedRoom.capacity}</div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    );
}

export default RoomsList