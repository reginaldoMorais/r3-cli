import chalk from 'chalk';
import figlet from 'figlet';
import { getEnviromentConfig } from '../../config';

export default (port, env) => {
  const configuration = getEnviromentConfig();
  console.log('configuration', configuration);
  const uri = configuration.uri;

  console.info(chalk.yellow(figlet.textSync(`:: EXAMPLE ::`, { horizontalLayout: 'full' })));
  console.info(chalk.cyan(`==> ✅  Server Up!`));
  console.info(chalk.cyan(`==> 🌎  Mode: ${env}`));
  console.info(chalk.cyan(`==> 🌎  Server running on: ${uri}`));
  console.info(chalk.cyan(`==> 🌎  Port: ${port}\n`));
};
