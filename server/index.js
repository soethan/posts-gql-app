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
    commentedBy: ID!
  }

  type Query {
    getUserById(id: ID!): User
    getUsers: [User]
    getPosts: [Post]
  }

  input PostInput {
    desc: String!
    postedBy: ID!
  }

  input CommentInput {
    desc: String!
    postId: ID!
    commentedBy: ID!
  }

  type Mutation {
    addPost(post: PostInput!): Post!
    addComment(comment: CommentInput!): Comment!
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
        ...post,
      };
      posts.push(newPost);
      return newPost;
    },

    addComment(_, { comment }) {
      const post = posts.find(p => p.id === comment.postId);
      if (post) {
        post.comments = post.comments || [];
        const newComment = {
          id: post.comments.length + 1,
          desc: comment.desc,
          commentedBy: comment.commentedBy,
        };
        post.comments.push(newComment);
        return newComment;
      }
      return {};
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
