class User
{
	constructor(name, lastname, location)
	{
		this.name = name;
		this.lastname = lastname;
		this.location = location;
	}
	
	getInfo()
	{
		return this.name + ' ' + this.lastname+ ' from ' + this.location;  
	}
}


// crerates an object of all below parameters
// { usr: [class User], user: [class User] }
exports.usr = User;
exports.user = User;

module.exports = User;

