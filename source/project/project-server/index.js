require('@babel/register')({});
require('./excludesExtensions');

const figlet = require('figlet');
const chalk = require('chalk');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

const Server = require('./server');
const app = Server.app();

const { getEnviromentConfig } = require('../config');

module.exports = app.listen(PORT, () => {
  const uri = getEnviromentConfig();

  console.info('');
  console.info(chalk.yellow(figlet.textSync(`:: {{APP_TITLE}} ::`, { horizontalLayout: 'full' })));
  console.info(chalk.cyan(`==> ✅  Server Up!`));
  console.info(chalk.cyan(`==> 🌎  Mode: ${NODE_ENV}`));
  console.info(chalk.cyan(`==> 🌎  Port: ${PORT}`));
  console.info(chalk.cyan(`==> 🌎  Server running on: ${uri.uri}`));
  console.info('');
});
