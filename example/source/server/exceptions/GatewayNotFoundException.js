const red = require('colors/safe').red;

class GatewayNotFoundException {
  constructor(err) {
    console.error(red('GatewayNotFoundException: ', err));
  }
}

module.exports = GatewayNotFoundException;
