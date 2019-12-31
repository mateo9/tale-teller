const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  id: ID!
  username: String!
  email: String!
  password: String
  avatar: String
}

type RootQuery {
  users: [User!]!
}

input UserInput {
  username: String!
  email: String!
  password: String!
  confirmPassword: String!
}

type RootMutation {
  createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)