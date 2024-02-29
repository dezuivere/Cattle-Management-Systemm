import React, { useState } from "react";
import axios from "axios";
import "../styles/AddCattle.css";

const AddCattle = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    health: "",
    caretaker_id: "",
    doc_id: "",
    room_no: "",
    weight: "",
    color: "",
    breed: "",
    birth_date: "",
    last_vaccination: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/add_cattle", formData)
      .then((response) => {
        console.log("Cattle added successfully:", response.data);
        alert("cattle added successfully!");
        // Reset the form after successful submission
        setFormData({
          age: "",
          gender: "",
          health: "",
          caretaker_id: "",
          doc_id: "",
          room_no: "",
          weight: "",
          color: "",
          breed: "",
          birth_date: "",
          last_vaccination: "",
          price: "",
        });
      })
      .catch((error) => {
        console.error("Error adding cattle:", error);
        alert("error adding the cattle!")
      });
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <b><h2>Add Cattle</h2></b>
        <form onSubmit={handleSubmit}>
          <div className="firstrow">
            <label>
              <b>Age*:</b>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <b>Gender:</b>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Health:</b>
              <input
                type="text"
                name="health"
                value={formData.health}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Caretaker ID:</b>
              <input
                type="number"
                name="caretaker_id"
                value={formData.caretaker_id}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="secrow">
            <label>
            <b>Doctor ID:</b>
              <input
                type="number"
                name="doc_id"
                value={formData.doc_id}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Room Number:</b>
              <input
                type="number"
                name="room_no"
                value={formData.room_no}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Weight:</b>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Color:</b>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="thirdrow">
            <label>
            <b>Breed:</b>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Date of Birth:</b>
              <input
                type="date"
                name="last_vaccination"
                value={formData.last_vaccination}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Last Vaccination:</b>
              <input
                type="date"
                name="last_vaccination"
                value={formData.last_vaccination}
                onChange={handleChange}
                required
              />
            </label>

            <label>
            <b>Price:</b>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit"><b>submit</b></button>
        </form>
      </div>
    </div>
  );
};

export default AddCattle;
