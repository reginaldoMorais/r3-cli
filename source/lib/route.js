const _ = require('lodash');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const fsx = require('fs-extra');
const touch = require('touch');
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {
  createRoute: name => {
    const status = new Spinner('Implementando nova rota, por favor aguarde...');
    status.start();

    try {
      console.log(chalk.green('  \u2713 Success create Route'));
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        status.stop();
      }, 500);
    }
  },
};
