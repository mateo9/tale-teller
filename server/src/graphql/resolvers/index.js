const User = require('../../models/User');

module.exports =   {
  createUser: async (args) => {
    try {
      let user = await User.create({
        user_name: args.userInput.user_name,
        first_name: args.userInput.first_name,
        last_name: args.userInput.last_name,
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