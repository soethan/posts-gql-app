const { users, posts } = require('../mockData');

module.exports = {
  getUserById(parent, { id }, context, info) {
    return users.find(user => user.id === id);
  },

  getUsers() {
    return users;
  },

  getPosts() {
    return posts;
  }
};
