var SessionController = {

	login: function(req, res) {

		// Get password and username from request
		var fullName = req.param('fullName');
		var password = req.param('password');

		// No username/password entered
		if(!(fullName && password)) {
			res.send("No username or password specified!",500);
			// TODO: redirect, storing an error in the session
		}

		else {
			// Lookup the username/password combination
			User.find({
				fullName: fullName,
				password: password // TODO: hash the password first
			}).done(function (err, user) {

				// Login failed, incorrect username/password combination
				if (err || !user) {
					res.send("Invalid username and password combination!",500);
					// TODO: redirect, storing an error in the session
				}

				// Login succeeded
				if (user) {
					req.session.authenticated = true;
					req.session.User = user;

					// Redirect to protected area
					res.ok('Login successfully');
				}
			});
		}
	}
};
module.exports = SessionController;