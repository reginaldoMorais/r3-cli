const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
const path = require('path');
const fs = require('fs');
const fsx = require('fs-extra')
const touch = require('touch');
const _ = require('lodash');

// Libs
const inquirer = require('./lib/inquirer');
const files = require('./lib/files');
const project = require('./lib/project');
const view = require('./lib/view');
const route = require('./lib/route');

const hasProject = () => {
  if (!files.fileExists(`.rip-cli`)) {
    console.log(chalk.red('Não foi encontrado Projeto válido!'));
    process.exit();
  }
}

const test = () => {
  const rootDir = _.last(process.cwd().split('/'));
  console.log(`Current directory: ${rootDir}`);
}

const createRoute = async () => {
  try {
    hasProject();
    
    const answers = await inquirer.askRouteName();
    const routeName = answers.routeName;

    if (files.directoryExists(`./views/component/${routeName}`)) {
      console.log(chalk.red('Esta Rota já existe!'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Criando nova View, por favor aguarde...'));
    await view.createView(routeName);

    console.info(chalk.blue('\u25A0 Criando nova Rota, por favor aguarde...'));
    await route.createRoute(routeName);
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
}

const createView = async () => {
  try {
    hasProject();

    const answers = await inquirer.askViewName();
    const viewName = answers.viewName;

    if (files.directoryExists(`./views/component/${viewName}`)) {
      console.log(chalk.red('Esta View já existe!'));
      process.exit();
    }

    console.log(chalk.blue('\u25A0 Criando nova View, por favor aguarde...'));
    await view.createView(viewName);
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
}

/** 
 * Cria a estrutura do projeto, caso ele já não exista.
*/
const createProject = async () => {
  try {
    const answers = await inquirer.askProjectName();
    const projectName = answers.projectName;

    if (files.directoryExists(projectName)) {
      console.log(chalk.red('Já existe um projeto com este nome!'));
      process.exit();
    }

    console.log(chalk.blue('\u25A0 Criando Projeto, por favor aguarde...'));

    await project.createProjectFolder(projectName);
    await project.copySettings(projectName);
    await project.copyConfig(projectName);
    await project.copyViews(projectName);
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
}

/** 
 * Responsável pela exibição do menu, caso não seja passado nenhum parametro.
*/
const showMenu = async () => {
  try {
    const answers = await inquirer.askMenuOption();

    switch (answers.option) {
      case 'Criar novo projeto': {
        createProject();
        break;
      }
      
      case 'Criar Rota': {
        createRoute();
        break;
      }  
      
      case 'Criar View': {
        createView();
        break;
      }
  
      default: {
        createProject();
        break;
      }
    }

  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
}

/** 
 * Função principal de execução.
*/
const run = () => {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync('REACT REDUX CLI', { horizontalLayout: 'full' })
    )
  );

  const [, , ...args] = process.argv;

  switch (args[0]) {
    case 'create': {
      createProject();
      break;
    }
    
    case 'route': {
      createRoute();
      break;
    }
    
    case 'view': {
      createView();
      break;
    }

    default: {
      showMenu();
      break;
    }
  }
}

run();