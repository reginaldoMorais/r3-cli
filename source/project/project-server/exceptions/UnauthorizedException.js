const red = require('colors/safe').red;

class UnauthorizedException {
  constructor(err) {
    console.error(red('UnauthorizedException: ', err));
  }
}

module.exports = UnauthorizedException;
