var users = [];
var fs = require('fs');
var path = require('path');

var outFileName = __dirname + path.sep + "users.json";

var fd;

fd = fs.openSync(outFileName, "w+");/*, function(err, fdOpen) {
	if (err) {
		console.log("Error opening file " + outFileName);
		return;
	}
	console.log("File opened successfully " + outFileName);
	fd = fdOpen;
});
*/
try {
	users = JSON.parse(fs.readFileSync(outFileName));
} catch(e) {
	console.log(e);
}
	/*, function(err, contents){
	if (!err) {
		users = JSON.parse(contents);
	}
});
*/

module.exports.create = function(user) {
	users.push(user);
	fs.write(fd, JSON.stringify(user), function(err) {
		if (err) {
			console.log("Error saving user");
		} else {
			console.log("User added successfully: " + user.userName);
		}
	});
};
module.exports.read = function() {
	return users;
};
module.exports.readByName = function(name) {
	for(var i=0;i<users.length;i++) {
		if (users[i].name === name) {
			return users[i];
		}
	}
	return null;
};
