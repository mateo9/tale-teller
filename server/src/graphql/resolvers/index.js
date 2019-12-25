const User = require('../../models/User');

module.exports =   {
  createUser: async (args) => {
    try {
      let user = await User.create({
        username: args.userInput.user_name,
        email: args.userInput.email,
        password: args.userInput.password,
        avatar: args.userInput.avatar
      })
      console.log(user)
    } catch(err) {
      console.log(err)
    }
  }
}