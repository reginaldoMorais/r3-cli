const red = require('colors/safe').red;

class NotFoundException {
  constructor(err) {
    console.error(red('NotFoundException: ', err));
  }
}

module.exports = NotFoundException;
