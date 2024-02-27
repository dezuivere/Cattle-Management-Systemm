import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/EmployeeList.css";
import employeeImg from "./employee.jpg";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  function handleClick() {
    window.location.href = "/add_employee";
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/employee_list")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  return (
    <div className="employee-list">
      <div className="employee-head">
        <div>Employee LIST</div>
        <div className="add-employee" onClick={() => handleClick()}>
          Add Employee
        </div>
      </div>

      <div className="employee-container">
        {employees.map((employee) => (
          <div key={employee.emp_id} className="employee-item">
            <img src={employeeImg} alt="employee" />
            <div className="employee-info">
              <div> ID: {employee.emp_id}</div>
              <div> Name: {employee.name}</div>
              <div> Age: {employee.age}</div>
              <div> Address: {employee.address}</div>
              <div> Salary: {employee.salary}</div>
              <div> Phone No: {employee.phone_no}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
