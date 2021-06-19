import express from "express";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer} from "apollo-server-express";

(async function startApolloServer() {
  const port = process.env.GATEWAY_PORT;
  const server_url = process.env.GATEWAY_SERVER_URL;

  const gateway = new ApolloGateway({
    serviceList: [ { "name": "accounts", url: "http://localhost:4001"}],
  });
  
  const server = new ApolloServer({
    gateway,
    subscriptions: false,
  })
  await server.start();
  
  const app = express();
  server.applyMiddleware({ app })

  await new Promise(resolve => app.listen({ port }, resolve));
  console.log(`🚀 Server ready at ${server_url}${server.graphqlPath}`);
})();
