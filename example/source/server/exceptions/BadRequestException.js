const red = require('colors/safe').red;

class BadRequestException {
  constructor(err) {
    console.error(red('BadRequestException: ', err));
  }
}

module.exports = BadRequestException;
