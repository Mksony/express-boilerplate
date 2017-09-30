module.exports = {
  up({ userService }) {
    const users = [
      { username: 'a@a.de' },
      { username: 'a@a.de' },
      { username: 'a@a.de' },
      { username: 'a@a.de' },
      { username: 'a@a.de' },
    ];
    return Promise.all(users.map(user => userService.save(user)));
  },
  down() {
  },
};
