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
    const status = new Spinner('Criando extrutura da View, por favor aguarde...');
    status.start();

    try {
      fs.mkdirSync(`./source/view/views/pages/${name}`);
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

    const file = `./source/view/views/pages/${name}/${component}.js`;
    const content = componentFile(component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Success create Component'));

    module.exports.createContainer(name);
  },

  createContainer: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/view/views/pages/${name}/${component}Container.js`;
    const content = containerFile(component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Success create Container'));

    module.exports.createAction(name);
  },

  createAction: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/view/views/pages/${name}/${component}Actions.js`;
    const content = actionFile(name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Success create Action'));

    module.exports.createReducer(name);
  },

  createReducer: name => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./source/view/views/pages/${name}/${component}Reducer.js`;
    const content = reducerFile(name);

    touch(file);
    fs.writeFileSync(file, content);

    module.exports.setReducerFile(name);

    console.info(chalk.green('  \u2713 Success create Reducer'));
  },

  setReducerFile: name => {
    const reducer = name.charAt(0).toUpperCase() + name.slice(1) + 'Reducer';

    try {
      const importStr = `/* Reducers */\nimport ${reducer} from './view/views/pages/${name}/${reducer}';`;
      const reducerStr = `const rootReducer = combineReducers({\n  ${name}: ${reducer},`;

      module.exports.setReducerImport(importStr);
      module.exports.setReducer(reducerStr);
    } catch (err) {
      console.error(chalk.red(`\nErro ao criar o Reducer ${name.toUpperCase()}!`));
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
    fsx.removeSync(`./source/view/views/pages/${name}`);
    console.error(chalk.red(`\n  \u2715 View ${name.toUpperCase()} removidas!`));
    process.exit();
  },
};
