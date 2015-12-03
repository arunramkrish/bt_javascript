var users = [];
module.exports.init = function() {

};
module.exports.create = function(user) {
	users.push(user);
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
