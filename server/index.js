const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const queryResolvers = require('./graphql/queryResolvers');
const mutationResolvers = require('./graphql/mutationResolvers');
const PORT = 9000;

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // mocks: true,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Running GraphQL Server at ${url}`)
});
