const _ = require('lodash');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const fsx = require('fs-extra')
const touch = require('touch');
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {
  createProjectFolder: (projectName) => {
    fs.mkdirSync(projectName);
  },

  copySettings : (projectName) => {
    fsx.copy(`${__dirname}/../project/settings/`, projectName, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(chalk.green('  \u2713 Success copySettings()'));
      }
    });
  },

  copyConfig : (projectName) => {
    fsx.copy(`${__dirname}/../project/config`, `${projectName}/config`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(chalk.green('  \u2713 Success copyConfig()'));
      }
    });
  },

  copyViews: (projectName) => {
    fsx.copy(`${__dirname}/../project/views`, `${projectName}/views`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(chalk.green('  \u2713 Success copyViews()'));
      }
    });
  },
};
