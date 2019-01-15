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
      `${process.cwd()}/${projectName}/source/client/index.html`,
      `${process.cwd()}/${projectName}/source/client/index.ejs`,
      `${process.cwd()}/${projectName}/source/server/index.js`,
      `${process.cwd()}/${projectName}/source/server/server.js`,
      `${process.cwd()}/${projectName}/source/server/template.js`,
      `${process.cwd()}/${projectName}/package.json`,
      `${process.cwd()}/${projectName}/commands-ls.js`,
      `${process.cwd()}/${projectName}/README.md`,
      `${process.cwd()}/${projectName}/.r3-cli`,
    ];

    files.forEach(file => {
      try {
        let data = fs.readFileSync(file, 'utf-8');
        let result;

        if (file.indexOf('package.json') > 0) {
          result = data.replace(/{{APP_TITLE}}/g, projectName.toLowerCase());
        } else {
          result = data.replace(/{{APP_TITLE}}/g, projectName.toUpperCase());
        }

        fs.writeFileSync(file, result, 'utf-8');
      } catch (err) {
        console.error(err);
        module.exports.deleteProject(projectName);
      }
    });

    console.info(chalk.green('  \u2713 Project Name inserted'));
  },

  copySettings: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-settings`, projectName);
      console.info(chalk.green('  \u2713 Settings folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copySource: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-source`, `${projectName}/source`);
      console.info(chalk.green('  \u2713 Source folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyViews: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-views`, `${projectName}/source/views`);
      console.info(chalk.green('  \u2713 Views folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyReducers: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-reducers`, `${projectName}/source/reducers`);
      console.info(chalk.green('  \u2713 Reducers folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyActions: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-actions`, `${projectName}/source/actions`);
      console.info(chalk.green('  \u2713 Actions folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyConfig: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-config`, `${projectName}/source/config`);
      console.info(chalk.green('  \u2713 Config folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyServer: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-server`, `${projectName}/source/server`);
      console.info(chalk.green('  \u2713 Server folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyAssets: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-assets`, `${projectName}/source/assets`);
      console.info(chalk.green('  \u2713 Assets folder created'));
    } catch (err) {
      console.error(err);
    }
  },

  copyClient: projectName => {
    try {
      fsx.copySync(`${__dirname}/../project/project-client`, `${projectName}/source/client`);
      console.info(chalk.green('  \u2713 Client folder created'));
    } catch (err) {
      console.error(err);
    }
  },
};
