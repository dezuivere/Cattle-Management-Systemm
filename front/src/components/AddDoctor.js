import React, { useState } from "react";
import axios from "axios";
import "../styles/AddDoctor.css"
const AddDoctor = () => {
    const [formData, setFormData] = useState({
        d_id:"",
        name: "",
        contact: "",
        specialization: "",
        hospital: "",
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
          .post("http://localhost:8080/add_doctor", formData)
          .then((response) => {
            console.log("Doctor added successfully:", response.data);
            alert("Doctor added successfully!");
            // Reset the form after successful submission
            setFormData({
                d_id:"",
                name: "",
                contact: "",
                specialization: "",
                hospital: "",
            });
          })
          .catch((error) => {
            console.error("Error adding doctor:", error);
            alert("error adding the doctor!")
          });
      };
    
      return (
        <div className="doctor-form-container">
          <div className="doctor-form-box">
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
            <label>
                <b>doctor id :</b>
                  <input
                    type="number"
                    name="d_id"
                    value={formData.d_id}
                    onChange={handleChange}
                  />
                </label>
                <label>
                <b>name :</b>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
    
                <label>
                <b>Contact :</b>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </label>
    
                <label>
                 <b> Specialisation :</b>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </label>
    
                <label>
                 <b> Hospital :</b>
                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                  />
                </label>

    
              <button type="submit">Add doctor</button>
            </form>
          </div>
        </div>
      );
}

export default AddDoctor