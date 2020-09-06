const { users, posts } = require('../mockData');

module.exports = {
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
};
