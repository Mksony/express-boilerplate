module.exports = {
  db: {
    development: {
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    },
    test: {
      dialect: 'sqlite',
      storage: ':memory:',
    },
    production: {
      username: 'root',
      password: null,
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql',
    },
  },
};
