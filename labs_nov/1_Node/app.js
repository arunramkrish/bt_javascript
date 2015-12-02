var msgHolder = require("./message.js");
var config = require("./config/config.js");

console.log(msgHolder.message);

console.log(config().userName);

console.log(config().dbConfig.dbName);

var userFactory = require("./model/user.js");

var user1 = userFactory("Arun", "12-12-12", "9449804064");
console.log("User Details" + user1.display());

var user2 = userFactory("Ram", "12-12-12", "9449804064");
console.log("User Details" + user2.display());

var userDao = require("./dao/userDao.js");
userDao.create(user1);
userDao.create(user2);

console.log("from DAO " + userDao.readByName("Arun").display());