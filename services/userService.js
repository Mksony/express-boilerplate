const { User } = require('../models');

async function findById(id) {
  const user = await User.findById(id);
  return user.get({ plain: true });
}

async function save(user) {
  const newUser = await User.create(user);
  return newUser.get({ plain: true });
}

async function remove(...userIds) {
  return User.destroy({
    where: {
      id: [...userIds],
    },
  });
}

module.exports = {
  findById,
  save,
  remove,
};
