const colors = require('colors/safe');

const commands =
  colors.cyan('========================') +
  colors.cyan('\n  :: {{APP_TITLE}} ::\n') +
  colors.cyan('========================\n\n') +
  'Para executar um dos scripts basta digitar os comandos abaixo no console: \n' +
  '    npm run ' +
  colors.green('command') +
  ' \n' +
  '  ou \n' +
  '    yarn ' +
  colors.green('command') +
  ' \n\n' +
  '▶️ ' +
  colors.green('start') +
  '        -> Atalho para rodar aplicação local em modo Desenvolvimento.\n' +
  '▶️ ' +
  colors.green('start:dev') +
  '    -> Roda aplicação local em modo Desenvolvimento.\n' +
  '▶️ ' +
  colors.green('start:stg') +
  '    -> Roda aplicação local em modo Staging.\n' +
  '▶️ ' +
  colors.green('start:prod') +
  '   -> Roda aplicação local em modo Production.\n' +
  '▶️ ' +
  colors.green('build') +
  '        -> Atalho para rodarExecuta o build da aplicação em modo Staging.\n' +
  '▶️ ' +
  colors.green('build:stg') +
  '    -> Executa o build da aplicação em modo Staging.\n' +
  '▶️ ' +
  colors.green('build:prod') +
  '   -> Executa o build da aplicação em modo Production.\n' +
  '▶️ ' +
  colors.green('clean') +
  '        -> Exclui a pasta de build do projeto.\n' +
  '▶️ ' +
  colors.green('serve') +
  '        -> Executa aplicação em modo Production.\n';

console.info(commands);
