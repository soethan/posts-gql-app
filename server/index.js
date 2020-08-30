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

  input PostInput {
    desc: String!,
    postedBy: String!
  }

  type Mutation {
    addPost(post: PostInput!): Post!
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
  },
  Mutation: {
    addPost(_, { post }) {
      const newPost = {
        id: posts.length,
        ...post
      };
      posts.push(newPost);
      return newPost;
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
