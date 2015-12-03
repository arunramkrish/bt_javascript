// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
var mongocfg = require('./mongocfg');
var mongoose = require('mongoose');

var connection = mongoose.connect(mongocfg.mongourl);
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var Project = new Schema({
    projectId    : ObjectId,
    title     : String,
    description     : String,
    date      : Date
});

var ProjectModel;
mongoose.connection.on("open", function(err) {
	if (!err) {
		ProjectModel = mongoose.model("TaskModel", Project);
	}
});

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

		app.post('/api/projects', function(req, res) {
			console.log("received post" + req.params);
			var project = new ProjectModel();
			console.log(req.body);
			
			project.title = req.body.title;
			project.description = req.body.description;
			
			project.save(function(err) {
				if (err) {
					console.log("Error while adding project " + err);
				} else {
					console.log("Project added successfuly");
				}
				res.send(project);
				res.end();
			});
		});
        app.get('/api/projects', function(req, res) {
            ProjectModel.find(function(err, projects) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(projects); // return all projects in JSON format
            });
        });

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;