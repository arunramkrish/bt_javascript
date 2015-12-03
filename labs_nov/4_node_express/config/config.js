var dbConfig = require("./dbconfig.js");
console.log("I am inside config.js");
module.exports = function() {
	console.log("I am inside config function.js");

	return {
		url : "http://localhost:8080",
		userName : "arun",
		dbConfig : dbConfig
	};
};