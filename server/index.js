const { ApolloServer } = require('apollo-server');
const { users, posts } = require('./mockData');
const typeDefs = require('./graphql/schema');
const queryResolvers = require('./graphql/queryResolvers');
const mutationResolvers = require('./graphql/mutationResolvers');

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // mocks: true,
});

server.listen({ port: 9000 }).then(({ url }) => {
  console.log(`🚀 Server at ${url}`)
});
