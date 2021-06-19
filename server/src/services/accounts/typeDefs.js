import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Account @key(fields: "id"){
    id: ID!
    email: String!
  }

  extend type Query {
    hello: String
    viewer: Account
  }
`;

export default typeDefs;