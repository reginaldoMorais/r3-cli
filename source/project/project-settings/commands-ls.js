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
  colors.green('analyse') +
  '               -> Executa commando Webpack que analiza bundles da aplicação.\n\n' +
  '▶️ ' +
  colors.green('start') +
  '                 -> Atalho para rodar aplicação local em modo Desenvolvimento.\n' +
  '▶️ ' +
  colors.green('start:dev') +
  '             -> Roda aplicação local em modo Desenvolvimento.\n' +
  '▶️ ' +
  colors.green('start:stg') +
  '             -> Roda aplicação local em modo Staging.\n' +
  '▶️ ' +
  colors.green('start:prod') +
  '            -> Roda aplicação local em modo Produção. [CUIDADO AO EXECUTAR NESTA CONGIGURAÇÃO]\n\n' +
  '▶️ ' +
  colors.green('build') +
  '                 -> Atalho para rodar o build da aplicação em modo Produção.\n' +
  '▶️ ' +
  colors.green('build:stg') +
  '             -> Roda o build da aplicação em modo Staging.\n' +
  '▶️ ' +
  colors.green('build:prod') +
  '            -> Roda o build da aplicação em modo Produção.\n\n' +
  '▶️ ' +
  colors.green('serve') +
  '                 -> Atalho para rodar a aplicação em modo Produção.\n' +
  '▶️ ' +
  colors.green('serve:stg') +
  '             -> Roda aplicação em modo Staging.\n' +
  '▶️ ' +
  colors.green('serve:prod') +
  '            -> Roda aplicação em modo Produção.\n\n' +
  '▶️ ' +
  colors.green('clean') +
  '                 -> Exclui a pasta de build do projeto.\n\n' +
  '▶️ ' +
  colors.green('test') +
  '                  -> Roda todos os testes da aplicação.\n' +
  '▶️ ' +
  colors.green('test [file.spec.js]') +
  '   -> Roda os testes de um arquivo.\n' +
  '▶️ ' +
  colors.green('test:w') +
  '                -> Roda os testes da aplicação com parametro --watchAll.\n' +
  '▶️ ' +
  colors.green('test:v') +
  '                -> Roda os testes da aplicação com parametro --verbose.\n' +
  '▶️ ' +
  colors.green('test:d') +
  '                -> Roda os testes em modo debug.\n' +
  '▶️ ' +
  colors.green('test:c') +
  '                -> Gera a cobertura de testes da aplicação.\n';

console.info(commands);
