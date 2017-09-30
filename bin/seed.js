const Umzug = require('umzug');
const path = require('path');

const models = require('../models');
const userService = require('../services/userService');
const { removeFileIfExists } = require('../utils');

const seedDirectoryPath = path.resolve(__dirname, '../seeds');
const seedLogPath = path.join(seedDirectoryPath, 'seed-log.json');

const umzug = new Umzug({
  storage: 'json',
  storageOptions: {
    path: seedLogPath,
  },
  // see: https://github.com/sequelize/umzug/issues/17
  migrations: {
    params: [{
      userService,
    }],
    path: seedDirectoryPath,
    pattern: /\.js$/,
    logging(...args) {
      console.log(...args);
    },
  },
});

models.sequelize.sync({ force: true })
  .then(() => removeFileIfExists(seedLogPath))
  .then(() => umzug.up())
  .then(() => process.exit(0));
