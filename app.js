const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { graphqlExpress } = require('apollo-server-express');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');

const app = express();
const jwt = require('express-jwt');
require('dotenv').config();

const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false
});

app.use(auth);
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);
// app.use(
//   '/graphql',
//   graphqlExpress((req) => ({
//     schema: graphqlSchema,
//     context: {
//       user: req.user
//     }
//   }))
// );
mongoose
  .connect('mongodb://localhost/student_management_system', {
    useNewUrlParser: true
  })
  .then((result) => {
    app.listen(5000, () => console.log(`Server running on port:`));
  })
  .catch((err) => console.log(err));
