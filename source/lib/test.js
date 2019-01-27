const chalk = require('chalk');
const fs = require('fs');
const fsx = require('fs-extra');
const touch = require('touch');
const CLI = require('clui');
const Spinner = CLI.Spinner;

// Libs
const actionTestFile = require('./files/actionTest');
const componentTestFile = require('./files/componentTest');
const containerTestFile = require('./files/containerTest');

module.exports = {
  createTest: name => {
    const status = new Spinner('Creating test structure, please wait...');
    status.start();

    try {
      fs.mkdirSync(`./source/views/web/pages/${name}/__test__`);
      module.exports.createComponentTest(name);
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  },

  createComponentTest: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/views/web/pages/${name}/__test__/${component}.spec.js`;
    const content = componentTestFile(component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful ComponentTest creation'));

    module.exports.createContainerTest(name);
  },

  createContainerTest: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/views/web/pages/${name}/__test__/${component}Container.spec.js`;
    const content = containerTestFile(component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful ContainerTest creation'));

    module.exports.createActionTest(name);
  },

  createActionTest: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/actions/__test__/${component}Actions.spec.js`;
    const content = actionTestFile(name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful ActionTest creation'));
  },

  deleteTest: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);
    fsx.removeSync(`./source/views/web/pages/${name}/__test__`);
    fsx.removeSync(`./source/actions/__test__/${component}Actions.spec.js`);
    console.error(chalk.red(`\n  \u2715 Testes removed!`));
    process.exit();
  },
};
