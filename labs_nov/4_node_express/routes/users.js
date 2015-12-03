var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao.js')
	var userFactory = require("../model/user.js");

/* GET users listing. */
router.get('/list', function(req, res, next) {

	var user1 = userFactory("Arun", "12-12-12", "9449804064");
	var user2 = userFactory("Ram", "12-12-12", "9449804064");

	userDao.create(user1);
	userDao.create(user2);

	
  	var users = userDao.read();

  	res.send(JSON.stringify(users));
});
router.get('/', function(req, res, next) {
  	res.render("users");
});
router.get('/:name', function(req, res, next) {
	var user = userDao.readByName(req.params.name);
	res.send(JSON.stringify(user));
});

module.exports = router;
