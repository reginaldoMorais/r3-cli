const chalk = require('chalk');
const fs = require('fs');
const fsx = require('fs-extra');

module.exports = {
  createProjectFolder: projectName => {
    fs.mkdirSync(projectName);
  },

  deleteProject: projectName => {
    fsx.removeSync(projectName);
    console.error(chalk.red(`\n  \u2715 Não foi possível criar o Projeto ${projectName.toUpperCase()}!`));
    process.exit();
  },

  setProjectName: projectName => {
    const files = [
      `${process.cwd()}/${projectName}/client/index.html`,
      `${process.cwd()}/${projectName}/server/index.js`,
      `${process.cwd()}/${projectName}/server/server.js`,
      `${process.cwd()}/${projectName}/package.json`,
      `${process.cwd()}/${projectName}/commands-ls.js`,
      `${process.cwd()}/${projectName}/README.md`,
      `${process.cwd()}/${projectName}/.r3-cli`,
    ];

    files.forEach(file => {
      try {
        let data = fs.readFileSync(file, 'utf-8');
        let result = data.replace(/{{APP_TITLE}}/g, projectName.toUpperCase());
        fs.writeFileSync(file, result, 'utf-8');
      } catch (err) {
        console.error(err);
        module.exports.deleteProject(projectName);
      }
    });

    console.info(chalk.green('  \u2713 Project Name inserido'));
  },

  copySettings: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-settings`, projectName);
      console.info(chalk.green('  \u2713 Settings criado'));
    } catch (err) {
      console.error(err);
    }
  },

  copyConfig: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-config`, `${projectName}/config`);
      console.info(chalk.green('  \u2713 Config criado'));
    } catch (err) {
      console.error(err);
    }
  },

  copyServer: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-server`, `${projectName}/server`);
      console.info(chalk.green('  \u2713 Server criado'));
    } catch (err) {
      console.error(err);
    }
  },

  copyPublic: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-public`, `${projectName}/public`);
      console.info(chalk.green('  \u2713 Public criado'));
    } catch (err) {
      console.error(err);
    }
  },

  copyClient: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-client`, `${projectName}/client`);
      console.info(chalk.green('  \u2713 Client criado'));
    } catch (err) {
      console.error(err);
    }
  },

  copySource: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-source`, `${projectName}/source`);
      console.info(chalk.green('  \u2713 Source criado'));
    } catch (err) {
      console.error(err);
    }
  },
};
