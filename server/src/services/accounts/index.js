import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildFederatedSchema } from "@apollo/federation";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

(async function startApolloServer() {
  const { ACCOUNTS_SERVER_PORT, ACCOUNTS_SERVER_URL } = process.env;
  const server = new ApolloServer({
    schema: buildFederatedSchema({ typeDefs, resolvers }),
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app })
  
  await new Promise(resolve => app.listen({ port: ACCOUNTS_SERVER_PORT }, resolve));
  console.log(`🚀 Server/Accounts ready at ${ACCOUNTS_SERVER_URL}${server.graphqlPath}`);
})();
