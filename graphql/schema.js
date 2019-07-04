const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type UserData {
    userId: String
    name: String
    email: String
    phoneNo: String
  }

  type AuthData {
    token: String
    userId: String
  }

  input UserInputData {
    name: String
    email: String
    password: String
    phoneNo: String
  }

  type Query {
    hello: String!
  }

  type Mutation {
    userRegistration(userInput: UserInputData): UserData!
    userLogin(email: String!, password: String!): AuthData!
  }
`;

module.exports = {
  typeDefs
};
