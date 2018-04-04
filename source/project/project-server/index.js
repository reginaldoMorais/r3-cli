require('babel-core/register')({});
require('./excludesExtensions');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

const Server = require('./server');
const app = Server.app();

module.exports = app.listen(PORT, () => {
  console.info('');
  console.info(`:: {{APP_TITLE}} ::`);
  console.info(`==> ✅  Server Up!`);
  console.info(`==> 🌎  Mode: ${NODE_ENV}`);
  console.info(`==> 🌎  Server running on: http://localhost:${PORT}/`);
  console.info('');
});
