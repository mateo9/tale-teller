const express = require('express');
const bodyParse = require('body-parser');
const graphQlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const db = require('./config/database');
const User = require('./models/User');

const app = express();

db
  .authenticate()
  .then(() => {
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });

app.use(bodyParse.json());

app.use('/graphql', graphQlHttp({
  schema: buildSchema(`
    type Event {
      id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      id: ID!
      user_name: String!
      first_name: String!
      last_name: String!
      email: String!
      password: String
      avatar: String
    }

    type RootQuery {
      events: [Event!]!
    }

    input UserInput {
      user_name: String!
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      avatar: String
    }

    type RootMutation {
      createUser(userInput: UserInput): User
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
  `),
  rootValue: {
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
  },
  graphiql: true
}))

app.listen(3000);