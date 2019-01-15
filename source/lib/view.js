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
const componentFile = require('./files/component');
const containerFile = require('./files/container');

module.exports = {
  createView: name => {
    const status = new Spinner('Creating View structure, please wait...');
    status.start();

    try {
      fs.mkdirSync(`./source/views/web/pages/${name}`);
      module.exports.createComponent(name);
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  },

  createComponent: name => {
    test.createTest(name);

    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/views/web/pages/${name}/${component}.js`;
    const content = componentFile(component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Component creation'));

    module.exports.createContainer(name);
  },

  createContainer: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/views/web/pages/${name}/${component}Container.js`;
    const content = containerFile(component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Container creation'));

    module.exports.createAction(name);
  },

  createAction: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/actions/${component}Actions.js`;
    const content = actionFile(name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Action creation'));

    module.exports.createReducer(name);
  },

  createReducer: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/reducers/${component}Reducer.js`;
    const content = reducerFile(name);

    touch(file);
    fs.writeFileSync(file, content);

    module.exports.setReducerFile(name);

    console.info(chalk.green('  \u2713 Successful Reducer creation'));
  },

  setReducerFile: name => {
    const reducer = name.charAt(0).toUpperCase() + name.slice(1) + 'Reducer';

    try {
      const importStr = `/* Reducers */\nimport ${reducer} from './reducers/${reducer}';`;
      const reducerStr = `const rootReducer = combineReducers({\n  ${name}: ${reducer},`;

      module.exports.setReducerImport(importStr);
      module.exports.setReducer(reducerStr);
    } catch (err) {
      console.error(chalk.red(`\nError creating Reducer ${name.toUpperCase()}!`));
      console.error(err);
      module.exports.deleteView(name);
    }
  },

  setReducerImport: importStr => {
    let data = fs.readFileSync(`./source/Reducers.js`, 'utf-8');
    let result = data.replace(/\/\* Reducers \*\//g, importStr);
    fs.writeFileSync(`./source/Reducers.js`, result, 'utf-8');
  },

  setReducer: reducerStr => {
    let data = fs.readFileSync(`./source/Reducers.js`, 'utf-8');
    let result = data.replace(/const rootReducer = combineReducers\(\{/g, reducerStr);
    fs.writeFileSync(`./source/Reducers.js`, result, 'utf-8');
  },

  deleteView: name => {
    fsx.removeSync(`./source/views/web/pages/${name}`);
    console.error(chalk.red(`\n  \u2715 View ${name.toUpperCase()} removed!`));
    process.exit();
  },
};
