const red = require('colors/safe').red;

class GatewayTimeoutException {
  constructor(err) {
    console.error(red(`GatewayTimeoutException: ${err}`));
  }
}

module.exports = GatewayTimeoutException;
