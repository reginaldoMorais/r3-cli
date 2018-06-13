const chalk = require('chalk');
const fs = require('fs');
const CLI = require('clui');
const Spinner = CLI.Spinner;

// Libs
const view = require('./view');

module.exports = {
  createRoute: (name, choise) => {
    const status = new Spinner('Implementing a new Route, please wait...');
    status.start();

    try {
      const container = name.charAt(0).toUpperCase() + name.slice(1) + 'Container';
      const component = name.charAt(0).toUpperCase() + name.slice(1);
      let file;

      const importStr = `/* Containers / Components */\nimport ${component} from './pages/${name}/${container}';`;
      let routeStr;

      if (choise.option == 'internal') {
        file = `./source/view/views/In.js`;
        routeStr = `<Switch>\n            <Route exact key="${name}" path="/in/${name}" component={${component}} />`;
      } else {
        file = `./source/view/views/Out.js`;
        routeStr = `<Switch>\n            <Route exact key="${name}" path="/${name}" component={${component}} />`;
      }

      try {
        module.exports.setImport(file, importStr);
        module.exports.setRoute(file, routeStr);
        module.exports.setMenu(name, choise);
      } catch (err) {
        console.error(chalk.red(`\n  \u2715 Error creating Route ${name.toUpperCase()}!`));
        console.error(err);
        view.deleteView(name);
      }

      console.info(chalk.green('  \u2713 Successful Route creation'));
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        status.stop();
      }, 500);
    }
  },

  setImport: (file, importStr) => {
    let data = fs.readFileSync(file, 'utf-8');
    let result = data.replace(/\/\* Containers \/ Components \*\//g, importStr);
    fs.writeFileSync(file, result, 'utf-8');
  },

  setRoute: (file, routeStr) => {
    let data = fs.readFileSync(file, 'utf-8');
    let result = data.replace(/<Switch>/g, routeStr);
    fs.writeFileSync(file, result, 'utf-8');
  },

  setMenu: (name, choise) => {
    const file = `./source/view/templates/menu/MenuReducer.js`;
    let link;

    if (choise.option == 'internal') {
      link = `/in/${name}`;
    } else {
      link = `/${name}`;
    }

    let data = fs.readFileSync(file, 'utf-8');
    const content = `},\n    {
      id: '${name}',
      name: '${name.charAt(0).toUpperCase() + name.slice(1)}',
      link: '${link}',
      icon: 'fa-circle',
      submenu: [],
      active: false,
      show: true,
    } /* r3-cli-menu-tag */,`;

    let result = data.replace(/} \/\* r3-cli-menu-tag \*\/,/g, content);
    fs.writeFileSync(file, result, 'utf-8');
  },
};
