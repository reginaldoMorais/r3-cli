const chalk = require('chalk');
const fs = require('fs');
const fsx = require('fs-extra');
const touch = require('touch');
const CLI = require('clui');
const Spinner = CLI.Spinner;

// Libs
const test = require('./test');
const reducerFile = require('./files/reducer');
const actionFile = require('./files/action');
const styleFile = require('./files/style');
const containerFile = require('./files/container');

module.exports = {
  createStyle: name => {
    const status = new Spinner(`Creating Style for the page ${name}, please wait...`);
    status.start();

    try {
      const style = `${name.toLowerCase()}.scss`;

      const file = `./source/assets/styles/scss/pages/${style}`;
      const content = styleFile(name.charAt(0).toUpperCase() + name.slice(1));

      touch(file);
      fs.writeFileSync(file, content);

      module.exports.setImport(style);

      console.info(chalk.green('  \u2713 Successful Style creation'));
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  },

  setImport: importStr => {
    let data = fs.readFileSync(`./source/view/Imports.js`, 'utf-8');
    let result = data.replace(/\/\* Pages \*\//g, `/* Pages */\nimport '../assets/styles/scss/pages/${importStr}';`);
    fs.writeFileSync(`./source/view/Imports.js`, result, 'utf-8');
  },

  deleteView: name => {
    fsx.removeSync(`./source/assets/styles/scss/pages/${name.toLowerCase()}.scss`);
    console.error(chalk.red(`\n  \u2715 View ${name.toUpperCase()} removidas!`));
    process.exit();
  },
};
