var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		console.log(queryString);
		connection.query(queryString, [table, cols, vals], function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	}, 
	updateOne: function(table, valCol, val, idCol, id, cb) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		console.log(queryString);
		connection.query(queryString, [table, valCol, val, idCol, id], function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;