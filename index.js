#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
const path = require('path');
const fs = require('fs');
const fsx = require('fs-extra')
const touch = require('touch');
const _ = require('lodash');
const CLI = require('clui');
const Spinner = CLI.Spinner;

// Libs
const inquirer = require('./source/lib/inquirer');
const files = require('./source/lib/files');
const project = require('./source/lib/project');
const view = require('./source/lib/view');
const route = require('./source/lib/route');

const showAppHeader = () => {
  console.log(' ');
  console.log(
    chalk.yellow(
      figlet.textSync('R3 CLI', { horizontalLayout: 'full' })
    )
  );
  console.log(
    chalk.yellowBright(
      ' =  React + Redux + Router Generator  =\n\n'
    )
  );
}

/**
 * Verifica se o comando está rodando num projeto válido.
*/
const hasProject = () => {
  if (!files.fileExists(`.rip-cli`)) {
    console.log(chalk.red('\nNão foi encontrado Projeto válido!'));
    process.exit();
  }
}

const test = () => {
  const rootDir = _.last(process.cwd().split('/'));
  console.log(`Current directory: ${rootDir}`);
}

/**
 * Cria a estrutura de rota e view, caso ele já não existão.
*/
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

/**
 * Cria a estrutura de view, caso ele já não exista.
*/
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

    const status = new Spinner(`Processando arquivos do novo projeto, por favor aguarde...`);
    status.start();

    try {
      await project.createProjectFolder(projectName);
      await project.copySettings(projectName);
      await project.copyConfig(projectName);
      await project.copyServer(projectName);
      await project.copyPublic(projectName);
      await project.copyClient(projectName);
      await project.copySource(projectName);
      await project.setProjectName(projectName);
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        status.stop();
      }, 500);
    }
  } catch (err) {
    if (err) {
      switch (err.code) {
        default: {
          console.error(err);
          project.deleteProject(projectName);
        }
      }
    }
  }
}

/**
 * Exibe as opções via command line.
*/
const showCommands = async () => {
  try {
    console.log(chalk.blue('Usage: rip-cli [arguments]'));
    console.log(chalk.cyan('   rip-cli --help\n'));
    console.log(chalk.blue('Options:'));
    console.log(chalk.cyan('  -h, --help                 print Application\'s commands'));
    console.log(chalk.cyan('  -c, --create               create a new project'));
    console.log(chalk.cyan('  -r, --route                create a new route and view'));
    console.log(chalk.cyan('  -v, --view                 create a new view\n'));
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

      case 'Exibir comandos': {
        showCommands();
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
  showAppHeader();

  const [, , ...args] = process.argv || [];

  if (args.length > 0) {
    if (args[0] == '--help' || args[0] == '-h') {
      showCommands();
    } else if (args[0] == '--create' || args[0] == '-c') {
      createProject();
    } else if (args[0] == '--route' || args[0] == '-r') {
      createRoute();
    } else if (args[0] == '--view' || args[0] == '-v') {
      createView();
    } else {
      console.log(chalk.red(`Command '${args[0]}' not found!\n`));
      showCommands();
    }
  } else {
    showMenu();
  }
}

run();
