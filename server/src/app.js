const express = require('express');
const bodyParse = require('body-parser');
const graphQlHttp = require('express-graphql');
const { buildSchema } = require('graphql')
const db = require('./config/database')


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

    type RootQuery {
      events: [Event!]!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return ['Testing', 'Testing'];
    },
    createEvent: (args) => {
      const eventName = args.name;
      return eventName
    }
  },
  graphiql: true
}))

app.listen(3000);