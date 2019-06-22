const colors = require('colors/safe');

const commands =
  colors.cyan('========================') +
  colors.cyan('\n  :: NEW-STRUCTURE ::\n') +
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
  colors.green('dev') +
  '                   -> Roda aplicação local em modo Desenvolvimento.\n' +
  '▶️ ' +
  colors.green('build') +
  '                 -> Rodar o build da aplicação, como default em modo Produção.\n' +
  '▶️ ' +
  colors.green('start') +
  '                 -> Rodar a aplicação server, como default em modo Produção.\n' +
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
