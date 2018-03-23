const inquirer = require('inquirer');

module.exports = {
  askMenuOption: () => {
    const questions = [
      {
        name: 'option',
        type: 'list',
        message: 'O que deseja fazer:',
        choices: ['Criar novo projeto', 'Criar Rota', 'Criar View'],
        default: 'Criar novo projeto',
      },
    ];
    return inquirer.prompt(questions);
  },
  askProjectName: () => {
    const questions = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Informe um nome para o Projeto:',
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return 'Por favor, entre com um nome para o Projeto.';
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
        message: 'Informe a rota.\n  Os caracteres devem ser minúsculos:',
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return 'Por favor, entre com uma rota válida.';
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
        message: 'Informe qual tipo de rota:',
        choices: ['externa', 'interna'],
        default: 'externa',
      },
    ];
    return inquirer.prompt(questions);
  },
  askViewName: () => {
    const questions = [
      {
        name: 'viewName',
        type: 'input',
        message: 'Informe o nome da View.\n  Os caracteres devem ser minúsculos:',
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return 'Por favor, entre com um nome válido.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
