const inquirer = require('inquirer');

module.exports = {
  askMenuOption: () => {
    const questions = [
      {
        type: 'list',
        name: 'option',
        message: 'O que deseja fazer:',
        choices: [ 'Criar novo projeto', 'Criar Rota', 'Criar View' ],
        default: 'Criar novo projeto'
      }
    ];
    return inquirer.prompt(questions);
  },
  askProjectName: () => {
    const questions = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Informe um nome para o Projeto:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Por favor, entre com um nome para o Projeto.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  askRouteName: () => {
    const questions = [
      {
        name: 'routeName',
        type: 'input',
        message: 'Informe a rota.\n  Os caracteres devem ser minúsculos:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Por favor, entre com uma rota válida.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  askViewName: () => {
    const questions = [
      {
        name: 'viewName',
        type: 'input',
        message: 'Informe o nome da View.\n  Os caracteres devem ser minúsculos:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Por favor, entre com um nome válido.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};