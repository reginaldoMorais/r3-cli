const red = require('colors/safe').red;

class Exception {
  constructor(err) {
    console.error(red('Exception: ', err));
  }
}

module.exports = Exception;
