var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "ShAzeb!985!",
	database: "burgers_db"
});

connection.connect(function(error){
	if(error){
		console.log("Error connecting: " + error.stack);
		return;
	}
	console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;