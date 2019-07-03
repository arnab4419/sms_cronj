const { buildSchema } = require('graphql');

module.exports = buildSchema(`
           
   type User {
      userId: String
      name: String
      email: String
      password: String
      phoneNo: String
   }

   type AuthData {
      token: String
      userId: String
   }

   input UserInputData {
      userId: String
      name: String
      email: String
      password: String
      phoneNo: String
   }

   type Query {
      login(email: String!, password: String!): String!
   }

   type Mutation {
      createUser(userInput: UserInputData): User!
   }

   schema {
      query: Query
      mutation: Mutation
   }
`);
