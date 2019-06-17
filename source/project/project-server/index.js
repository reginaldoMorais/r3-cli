require('@babel/register')({});
// require('newrelic');
require('./excludesExtensions');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

const Server = require('./server');
const app = Server.app();
const Console = require('./console');

module.exports = app.listen(PORT, err => {
  if (err) return console.error(err);
  Console.default(PORT, NODE_ENV);
});
