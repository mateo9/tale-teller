const User = require('../../models/User');

module.exports =   {
  createUser: args => {
    let user = User.create({
      user_name: args.userInput.user_name,
      first_name: args.userInput.first_name,
      last_name: args.userInput.last_name,
      email: args.userInput.email,
      password: args.userInput.password,
      avatar: args.userInput.avatar
    }).then((user) => {
      console.log('tu sam');
      console.log(user);
    });
  }
}