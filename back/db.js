var mysql = require("mysql");

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'cms2',
    user: 'root',
    password: ''
});


module.exports = connection;
