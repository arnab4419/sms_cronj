const { registration, login } = require('../api/user');

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
  Mutation: {
    userRegistration: registration,
    userLogin: login
  }
};

module.exports = {
  resolvers
};
