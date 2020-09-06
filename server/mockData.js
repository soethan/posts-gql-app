const users = [
  {
    id: '1',
    firstName: 'Steven',
    lastName: 'Soe',
    email: 'steven.soe@gmail.com'
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Wayne',
    email: 'michael.wayne@gmail.com'
  }
];

const posts = [
  {
    id: '1',
    desc: 'post 1',
    postedBy: '1',
    comments: [
      {
        id: 1,
        desc: 'post 1 is great!',
        commentedBy: '1',
      },
      {
        id: 2,
        desc: 'post 1 ... Keep it up!',
        commentedBy: '2',
      }
    ]
  },
  {
    id: '2',
    desc: 'post 2',
    postedBy: '1'
  },
  {
    id: '3',
    desc: 'post 3',
    postedBy: '1'
  },
  {
    id: '4',
    desc: 'post 4',
    postedBy: '2'
  },
  {
    id: '5',
    desc: 'post 5',
    postedBy: '2'
  }
];

module.exports = { users, posts };
