const express = require("express");
var mysql = require("mysql");
// const fs = require('fs');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }));
const connection = require('./db.js');
const { error } = require("console");

app.get("/", (req, res) => {
    const sql = `SELECT * FROM cattle;`;
    connection.query(sql, function (err, response) {
        if (err) throw err;
        else{
           res.send(response); 
        } 
    })
})

// Endpoint to add player details
app.post("/add_cattle", (req, res) => {
    const { age, gender, health, caretaker_id, doc_id, room_no, weight, color, breed, birth_date, last_vaccination, price } = req.body;

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


app.get("/get_doctor_details/:doc_id", (req, res) => {
    const docId = req.params.doc_id;
    const sql = `SELECT * FROM doctor WHERE d_id = ${docId};`;
    connection.query(sql, function (err, response) {
        if (err) {
            console.error("Error fetching doctor details:", err);
            res.status(500).send({ message: "Failed to fetch doctor details" });
        } else {
            if (response.length > 0) {
                res.status(200).send(response[0]);
            } else {
                res.status(404).send({ message: "Doctor not found" });
            }
        }
    });
});

//establishes connections
app.listen(8080, () => {
    console.log("port connected")
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Database coletions")
    })
})