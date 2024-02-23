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

//establishes connections
app.listen(8080, () => {
    console.log("port connected")
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Database coletions")
    })
})