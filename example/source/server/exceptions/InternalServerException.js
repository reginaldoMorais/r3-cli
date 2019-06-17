const red = require('colors/safe').red;

class InternalServerException {
  constructor(err) {
    console.error(red('InternalServerException: ', err));
  }
}

module.exports = InternalServerException;
