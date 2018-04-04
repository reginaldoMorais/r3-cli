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
  console.info(' ');
  console.info(
    chalk.yellow(
      figlet.textSync('R3 CLI', { horizontalLayout: 'full' })
    )
  );
  console.info(
    chalk.yellowBright(
      ' =  React + Redux + Router Generator  =\n\n'
    )
  );
}

/**
 * Verifica se o comando está rodando num projeto válido.
*/
const hasProject = () => {
  if (!files.fileExists(`.r3-cli`)) {
    console.error(chalk.red('\n  Não foi encontrado Projeto válido!\n'));
    process.exit();
  }
}

const test = () => {
  const rootDir = _.last(process.cwd().split('/'));
  console.info(`Current directory: ${rootDir}`);
}

/**
 * Cria a estrutura de rota e view, caso ele já não existão.
*/
const createRoute = async () => {
  try {
    hasProject();

    const answers = await inquirer.askRouteName();
    const routeName = answers.routeName;

    if (files.directoryExists(`./source/views/view/${routeName}`)) {
      console.error(chalk.red('\n  Esta Rota já existe!\n'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Criando nova View, por favor aguarde...'));
    await view.createView(routeName);

    const choise = await inquirer.askRouteType();

    console.info(chalk.blue('\u25A0 Criando nova Rota, por favor aguarde...'));
    await route.createRoute(routeName, choise);
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

    if (files.directoryExists(`./source/views/view/${viewName}`)) {
      console.error(chalk.red('\n  Esta View já existe!\n'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Criando nova View, por favor aguarde...'));
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
      console.error(chalk.red('\n  Já existe um projeto com este nome!\n'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Criando Projeto, por favor aguarde...'));

    const status = new Spinner(`Processando arquivos do novo projeto, por favor aguarde...`);
    status.start();

    try {
      await project.createProjectFolder(projectName);
      await project.copySource(projectName);
      await project.copyViews(projectName);
      await project.copySettings(projectName);
      await project.copyConfig(projectName);
      await project.copyServer(projectName);
      await project.copyPublic(projectName);
      await project.copyClient(projectName);
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
    console.info(chalk.blue('Usage: r3-cli [arguments]'));
    console.info(chalk.cyan('   r3-cli --help\n'));
    console.info(chalk.blue('Options:'));
    console.info(chalk.cyan('  -h, --help                 print application\'s commands'));
    console.info(chalk.cyan('  -v, --version              list r3-cli version'));
    console.info(chalk.cyan('  -c, --create               create a new project'));
    console.info(chalk.cyan('  -r, --route                create a new route and view'));
    console.info(chalk.cyan('  -w, --view                 create a new view\n'));
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
 * Exibe versão de R3-CLI.
*/
const showVersion = async () => {
  const pjson = require('./package.json');

  try {
    console.info(chalk.blue(`${pjson.version} version\n`));
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
    } else if (args[0] == '--version' || args[0] == '-v') {
      showVersion();
    } else if (args[0] == '--create' || args[0] == '-c') {
      createProject();
    } else if (args[0] == '--route' || args[0] == '-r') {
      createRoute();
    } else if (args[0] == '--view' || args[0] == '-w') {
      createView();
    } else {
      console.error(chalk.red(`Command 'r3-cli ${args[0]}' not found!\n`));
      showCommands();
    }
  } else {
    showMenu();
  }
}

run();
