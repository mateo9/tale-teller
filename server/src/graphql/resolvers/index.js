const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');


function jwtSignUser(user) {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports =   {
  createUser: async (args) => {
    try {
      console.log('ja sam tu');
      let user = await User.create({
        username: args.userInput.username,
        email: args.userInput.email,
        password: args.userInput.password,
        avatar: args.userInput.avatar
      })
    } catch(err) {
    }
  }
}