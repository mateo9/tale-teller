const express = require('express');
const bodyParse = require('body-parser');
const graphQlHttp = require('express-graphql');
const cors = require('cors');
const db = require('./config/database');
const app = express();
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolver = require('./graphql/resolvers/index');

db
  .authenticate()
  .then(() => {
      console.log('Connection has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });

app.use(bodyParse.json());
app.use(cors())

app.use('/graphql', graphQlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolver,
  graphiql: true
}))

app.listen(3000);