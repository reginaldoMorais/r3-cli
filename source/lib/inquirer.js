const inquirer = require('inquirer');

module.exports = {
  askMenuOption: () => {
    const questions = [
      {
        name: 'option',
        type: 'list',
        message: 'What do you want to do:',
        choices: ['Create a new project', 'Create a Route', 'Show available commands'],
        default: 'Create new project',
      },
    ];
    return inquirer.prompt(questions);
  },
  askProjectName: () => {
    const questions = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Enter a name for the Project:',
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a name for the Project.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
  askRouteName: () => {
    const questions = [
      {
        name: 'routeName',
        type: 'input',
        message: 'Enter a Route.\n The characters must be lowercase:',
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid Route.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
  askRouteType: () => {
    const questions = [
      {
        name: 'option',
        type: 'list',
        message: 'Tell me which route type do you want:',
        choices: ['external', 'internal'],
        default: 'external',
      },
    ];
    return inquirer.prompt(questions);
  },
};
