const { ApolloServer, gql } = require('apollo-server');
const { users } = require('./mockData');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type Post {
    id: ID!
    desc: String
    postedBy: String
  }

  type Query {
    getUserById(id: ID!): User
    getUsers: [User]
  }
`;

const resolvers = {
  Query: {
    getUserById(parent, { id }, context, info) {
      return users.find(user => user.id === id);
    },

    getUsers() {
      return users;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // mocks: true,
});

server.listen({ port: 9000 }).then(({ url }) => {
  console.log(`🚀 Server at ${url}`)
});
