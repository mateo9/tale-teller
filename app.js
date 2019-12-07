const express = require('express');
const bodyParse = require('body-parser');
const graphQlHttp = require('express-graphql');
const { buildSchema } = require('graphql')

const app = express();

app.use(bodyParse.json());

app.use('/graphql', graphQlHttp({
  schema: buildSchema(`
    type RootQuery {
      events: [String!]!
    }

    type RootMutation {
      createEvent(name: String): String
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