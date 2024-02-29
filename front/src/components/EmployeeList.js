import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/EmployeeList.css";
import employeeImg from "./employee.jpg";
import Modal from "./Modal";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleClick() {
    window.location.href = "/add_employee";
  }

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    // localStorage.setItem("selectedCow",cow.cow_id);
  };

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
      <div className="cattle-head">
        <div>
          <h2>EMPLOYEE LIST</h2>
        </div>
        <div className="test1" onClick={() => handleClick()}>
          <button className="header">+</button>
        </div>
      </div>

      <div className="employee-container">
        {employees.map((employee) => (
          <div key={employee.emp_id} className="cow-item" onClick={() => handleEmployeeClick(employee)}>
            <img className="emp_img" src={employeeImg} alt="employee" />
            <div className="employee-info">
              {/* <div> ID: {employee.emp_id}</div> */}
              <div> Name: {employee.name}</div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={selectedEmployee !== null}
        onClose={() => setSelectedEmployee(null)}
      >
        {selectedEmployee && (
          <div className="cow-details">
            <div className="image-container">
              <img src={employeeImg} alt="Cow" />
            </div>
            <div className="details-container">
              {/* <div>ID: {selectedEmployee.emp_id}</div> */}
              <div><b>Name:</b> {selectedEmployee.name}</div>
              <div><b>Age: </b>{selectedEmployee.age}</div>
              <div><b>Adress:</b> {selectedEmployee.address}</div>
              <div><b>Salary : </b>{selectedEmployee.salary}</div>
              <div><b>Phone no:</b> {selectedEmployee.phone_no}</div>
              {/* <div>
                <button className="header" onClick={()=>getExtraDetails()}>Extra Details</button>
              </div> */}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default EmployeeList;
