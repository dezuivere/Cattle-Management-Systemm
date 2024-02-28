import React, { useState } from "react";
import axios from "axios";
import "../styles/AddRoom.css";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    room_no: "",
    water_supply: "",
    food_supply: "",
    capacity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    axios
      .post("http://localhost:8080/add_room", formData)
      .then((response) => {
        console.log("Room added successfully:", response.data);
        alert("Room added successfully!");
        // Reset the form after successful submission
        setFormData({
          room_no: "",
          water_supply: "",
          food_supply: "",
          capacity: "",
        });
      })
      .catch((error) => {
        console.error("Error adding room:", error);
        alert("Error adding the room!");
      });
  };

  return (
    <div className="employee-form-container">
      <div className="employee-form-box">
        <h2>Add Room</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Room No:
            <input
              type="number"
              name="room_no"
              value={formData.room_no}
              onChange={handleChange}
            />
          </label>
          <label>
            Water Supply(in litres):
            <input
              type="number"
              name="water_supply"
              value={formData.water_supply}
              onChange={handleChange}
            />
          </label>
          <label>
            Food Supply:
            <input
              type="number"
              name="food_supply"
              value={formData.food_supply}
              onChange={handleChange}
            />
          </label>
          <label>
            Capacity:
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add room</button>
        
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
