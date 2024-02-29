import React, { useState } from "react";
import axios from "axios";
import "../styles/AddEmployee.css";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    emp_id: "",
    name: "",
    age: "",
    address: "",
    salary: "",
    phone_no: 0,
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
      .post("http://localhost:8080/add_employee", formData)
      .then((response) => {
        console.log("Employee added successfully:", response.data);
        alert("Employee added successfully!");
        // Reset the form after successful submission
        setFormData({
          emp_id: "",
          name: "",
          age: "",
          address: "",
          salary: "",
          phone_no: 0,
        });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        alert("Error adding the employee!");
      });
  };

  return (
    <div className="employee-form-container">
      <div className="employee-form-box">
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>
          <b>Employee ID:</b>
            <input
              type="number"
              name="emp_id"
              value={formData.emp_id}
              onChange={handleChange}
            />
          </label>
          <label>
          <b>Name:</b>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
          <b>Age:</b>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
          <b>Address:</b>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
          <b>Salary:</b>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </label>
          <label>
          <b>Phone Number:</b>
            <input
              type="number"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
