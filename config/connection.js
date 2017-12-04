var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "us-cdbr-iron-east-05.cleardb.net",
	user: "bb2e9e42d9ac4f",
	password: "973cf755",
	database: "heroku_3af688aac6389e7"
});

connection.connect(function(error){
	if(error){
		console.log("Error connecting: " + error.stack);
		return;
	}
	console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;