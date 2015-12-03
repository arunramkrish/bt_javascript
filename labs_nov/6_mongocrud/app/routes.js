// app/routes.js

// grab the project model we just created
var Project = require('./models/project');

module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
		app.post('/api/projects', function(req, res) {
			console.log("received post" + req.params);
			var project = new Object();
			console.log(req.body);
			project.name = req.body.name;
			project.site = req.body.site;
			project.description = req.body.description;
			
			Project.addProject(project, function(err, response) {
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
            Project.getProjects(function(err, projects) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(projects); // return all projects in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };