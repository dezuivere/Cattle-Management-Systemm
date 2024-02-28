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
              />
            </label>

            <label>
              <b>Gender:</b>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </label>

            <label>
              Health:
              <input
                type="text"
                name="health"
                value={formData.health}
                onChange={handleChange}
              />
            </label>

            <label>
              Caretaker ID:
              <input
                type="number"
                name="caretaker_id"
                value={formData.caretaker_id}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="secrow">
            <label>
              Doctor ID:
              <input
                type="number"
                name="doc_id"
                value={formData.doc_id}
                onChange={handleChange}
              />
            </label>

            <label>
              Room Number:
              <input
                type="number"
                name="room_no"
                value={formData.room_no}
                onChange={handleChange}
              />
            </label>

            <label>
              Weight:
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </label>

            <label>
              Color:
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="thirdrow">
            <label>
              Breed:
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
              />
            </label>

            <label>
              Date of Birth:
              <input
                type="date"
                name="last_vaccination"
                value={formData.last_vaccination}
                onChange={handleChange}
              />
            </label>

            <label>
              Last Vaccination:
              <input
                type="date"
                name="last_vaccination"
                value={formData.last_vaccination}
                onChange={handleChange}
              />
            </label>

            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit">Add Cattle</button>
        </form>
      </div>
    </div>
  );
};

export default AddCattle;
