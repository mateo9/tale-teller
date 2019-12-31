const User = require('../../models/User');

module.exports =   {
  createUser: async (args) => {
    try {
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