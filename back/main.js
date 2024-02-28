const express = require("express");
var mysql = require("mysql");
// const fs = require('fs');
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }));
const connection = require("./db.js");
const { error } = require("console");

app.get("/", (req, res) => {
  const sql = `SELECT * FROM cattle;`;
  connection.query(sql, function (err, response) {
    if (err) throw err;
    else {
      res.send(response);
    }
  });
});

app.get("/doctor_list", (req, res) => {
  const sql = `SELECT * FROM doctor;`;
  connection.query(sql, function (err, response) {
    if (err) throw err;
    else {
      res.send(response);
    }
  });
});

app.get("/employee_list", (req, res) => {
  const sql = `SELECT * FROM employee;`;
  connection.query(sql, function (err, response) {
    if (err) throw err;
    else {
      res.send(response);
    }
  });
});

app.get("/room_list", (req, res) => {
  const sql = `SELECT * FROM rooms;`;
  connection.query(sql, function (err, response) {
    if (err) throw err;
    else {
      res.send(response);
    }
  });
});

// Endpoint to add cattle details
app.post("/add_cattle", (req, res) => {
  const {
    age,
    gender,
    health,
    caretaker_id,
    doc_id,
    room_no,
    weight,
    color,
    breed,
    birth_date,
    last_vaccination,
    price,
  } = req.body;

  const sql = `INSERT INTO cattle (age, gender, health, caretaker_id, doc_id, room_no, weight, color, breed, birth_date, last_vaccination, price) 
                 VALUES ('${age}', '${gender}', '${health}', '${caretaker_id}', '${doc_id}', '${room_no}', '${weight}', '${color}', '${breed}', '${birth_date}', '${last_vaccination}', '${price}');`;

  connection.query(sql, function (err) {
    if (err) {
      console.error("Error adding cattle:", err);
      res.status(500).send({ message: "Failed to add cattle" });
    } else {
      res.status(200).send({ message: "Cattle added successfully" });
    }
  });
});

// Endpoint to add doctor details
app.post("/add_doctor", (req, res) => {
  const { d_id, name, contact, specialization, hospital } = req.body;

  const sql = `INSERT INTO doctor (d_id,name,contact,specialization,hospital) 
                 VALUES ('${d_id}','${name}', '${contact}', '${specialization}', '${hospital}');`;

  connection.query(sql, function (err) {
    if (err) {
      console.error("Error adding doctor:", err);
      res.status(500).send({ message: "Failed to add doctor" });
    } else {
      res.status(200).send({ message: "Doctor added successfully" });
    }
  });
});

// Endpoint to add room details
app.post("/add_room", (req, res) => {
  const { room_no, water_supply, food_supply, capacity } = req.body;

  const sql = `INSERT INTO rooms (room_no,water_supply,food_supply,capacity) 
                 VALUES ('${room_no}','${water_supply}', '${food_supply}', '${capacity}');`;

  connection.query(sql, function (err) {
    if (err) {
      console.error("Error adding room:", err);
      res.status(500).send({ message: "Failed to add room" });
    } else {
      res.status(200).send({ message: "Room added successfully" });
    }
  });
});

// Endpoint to add employee details
app.post("/add_employee", (req, res) => {
  const { emp_id, name, age, address, salary, phone_no } = req.body;
  console.log(phone_no);
  const sql = `INSERT INTO employee (emp_id, name, age, address, salary, phone_no) 
                 VALUES ('${emp_id}', '${name}', '${age}', '${address}', '${salary}', '${phone_no}');`;

  connection.query(sql, function (err) {
    if (err) {
      console.error("Error adding employee:", err);
      res.status(500).send({ message: "Failed to add employee" });
    } else {
      res.status(200).send({ message: "Employee added successfully" });
    }
  });
});

app.post("/get_doctor_specific_details", (req, res) => {
  const cow_id = req.body.id;
  const sql = `SELECT * FROM doctor WHERE d_id = (SELECT doc_id FROM cattle WHERE cow_id = ?)`;
  connection.query(sql,[cow_id], function (err, response) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post("/get_caretaker_specific_details", (req, res) => {
  const cow_id = req.body.id;
  const sql = `SELECT * FROM employee WHERE emp_id = (SELECT caretaker_id FROM cattle WHERE cow_id = ?)`;
  connection.query(sql, [cow_id],function (err, response) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post("/get_room_specific_details", (req, res) => {
  const cow_id = req.body.id;
  console.log(cow_id);
  const sql = `SELECT * FROM rooms WHERE room_no = (SELECT room_no FROM cattle WHERE cow_id = ?)`;
  connection.query(sql, [cow_id], function (err, response) {
    if (err) {
      console.error("Error fetching room details:", err);
      res.status(500).send("Error fetching room details");
    } else {
      res.status(200).send(response);
    }
  });
});


//establishes connections
app.listen(8080, () => {
  console.log("port connected");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database coletions");
  });
});
