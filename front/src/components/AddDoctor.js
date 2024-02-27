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
                  doctor id :
                  <input
                    type="number"
                    name="d_id"
                    value={formData.d_id}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  name :
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
    
                <label>
                  Contact :
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                  />
                </label>
    
                <label>
                  Specialisation :
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </label>
    
                <label>
                  Hospital :
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