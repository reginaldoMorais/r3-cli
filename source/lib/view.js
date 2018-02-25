const _ = require('lodash');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const fsx = require('fs-extra')
const touch = require('touch');
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {
  createView: (name) => {
    const status = new Spinner('Criando extrutura da View, por favor aguarde...');
    status.start();

    try {
      module.exports.createController(name);
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        status.stop();
      }, 1000);
    }
  },

  createController: (name) => {
    fs.mkdirSync(`./views/component/${name}`);
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./views/component/${name}/${component}.jsx`;
    const content = `
    import React, { Component } from 'react';

    class ${component} extends Component {
      render() {
        return (
          <div>
            Conteúdo
          </div>
        );
      }
    }

    export default ${component};
    `;

    touch(file);
    fs.writeFileSync(file, content);

    console.log(chalk.green('  \u2713 Success create Component'));

    module.exports.createContainer(name);
  },

  createContainer: (name) => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./views/component/${name}/${component}Container.jsx`;
    const content = `
    import React from 'react';
    import { bindActionCreators } from 'redux';
    import { connect } from 'react-redux';

    import { action } from './${component}Actions';
    import ${component} from './${component}';

    const mapStateToProps = state => ({});
    const mapDispatchToProps = dispatch => bindActionCreators({ action }, dispatch);
    export default connect(mapStateToProps, mapDispatchToProps)(${component});
    `;

    touch(file);
    fs.writeFileSync(file, content);

    console.log(chalk.green('  \u2713 Success create Container'));
    
    module.exports.createAction(name);
  },

  createAction: (name) => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./views/component/${name}/${component}Actions.js`;
    const content = `
    export const action = () => {
      return { type: '${name.toUpperCase()}_ACTION' }
    };
    `;

    touch(file);
    fs.writeFileSync(file, content);

    console.log(chalk.green('  \u2713 Success create Action'));

    module.exports.createReducer(name);
  },

  createReducer: (name) => {
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    const file = `./views/component/${name}/${component}Reducer.js`;
    const content = `
    const INITIAL_STATE = {};

    export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case '${name.toUpperCase()}_ACTION': {
          return state;
        }

        default: {
          return state;
        }
      }
    };
    `;

    touch(file);
    fs.writeFileSync(file, content);

    console.log(chalk.green('  \u2713 Success create Reducer'));
  },
};
