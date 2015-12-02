function User(name, dob, contactDetails) {
	this.name = name;
	this.dob = dob;
	this.contactDetails = contactDetails;
}
User.prototype.display = function() {
	return this.name + ":" + this.dob + ":" + this.contactDetails;
}
module.exports = function(name, dob, contactDetails) {
	return new User(name, dob, contactDetails);
};