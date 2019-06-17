const red = require('colors/safe').red;

class HTTPConflictException {
  constructor(err) {
    console.error(red(`HTTPConflictException: ${err}`));
  }
}

module.exports = HTTPConflictException;
