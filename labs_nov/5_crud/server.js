// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
var birds = require('./app/birds');
app.use('/birds', birds);
    
// config files
var db = require('./config/db');
console.log(db.sayHello());

var mysql = require('mysql');
var connection = mysql.createConnection({
    host:db.host,
    user:db.user,
    password:db.password,
    database:db.database
});

connection.connect(function (err) {
    if (err) {
		console.log("Error while connecting to database");
        return console.log(err);
    } else {
        return console.log("DB connected successfully");
    }
});

var projectsDao = require('./app/models/project');
projectsDao.setup(connection);

/*
var task = {
    name: "Dilip angular",
    site: "nodejs",
    description: "training"
};
projectsDao.addProject(task, function(err) {
    if(err) {
        return console.log(err);
    } else {
        console.log("Project added successfully");
    }
});
*/

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;