console.log("I am inside message.js");
var config = require("./config/config.js");

exports.message = "Hello World";
console.log(config().userName);