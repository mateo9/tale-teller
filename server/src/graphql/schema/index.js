const { buildSchema } = require('graphql');

module.exports = buildSchema(`
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
  users: [User!]!
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
`)