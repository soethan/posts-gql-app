const { gql } = require('apollo-server');

module.exports = gql`
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
