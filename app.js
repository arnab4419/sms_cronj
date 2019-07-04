const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const { resolvers } = require('./graphql/resolver');
const { typeDefs } = require('./graphql/schema');
// const typeDefs = gql`${fs.readFileSync(__dirname.concat('/graphql/schema.graphql'), 'utf8')}`;

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

mongoose
  .connect('mongodb://localhost/student_management_system', {
    useNewUrlParser: true
  })
  .then((response) => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  });
