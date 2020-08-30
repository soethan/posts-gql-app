const { ApolloServer, gql } = require('apollo-server');
const { users, posts } = require('./mockData');

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
    comments: [Comment]
  }

  type Comment {
    id: ID!
    desc: String
  }

  type Query {
    getUserById(id: ID!): User
    getUsers: [User]
    getPosts: [Post]
  }
`;

const resolvers = {
  Query: {
    getUserById(parent, { id }, context, info) {
      return users.find(user => user.id === id);
    },

    getUsers() {
      return users;
    },

    getPosts() {
      return posts;
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
