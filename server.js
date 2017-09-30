const app = require('./app');
const models = require('./models');

async function startServer() {
  await models.sequelize.sync();
  app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
  });
}

startServer();
