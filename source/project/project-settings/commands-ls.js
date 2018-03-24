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
  '   -> Roda aplicação local em modo Production.\n\n' +
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
  colors.green('serve') +
  '        -> Executa aplicação em modo Production.\n\n' +
  '▶️ ' +
  colors.green('clean') +
  '        -> Exclui a pasta de build do projeto.\n\n' +
  '▶️ ' +
  colors.green('test') +
  '         -> Executa os testes da aplicação.\n' +
  '▶️ ' +
  colors.green('test:w') +
  '       -> Executa os testes da aplicação com parametro --watchAll.\n' +
  '▶️ ' +
  colors.green('test:v') +
  '       -> Executa os testes da aplicação com parametro --verbose.\n' +
  '▶️ ' +
  colors.green('test:d') +
  '       -> Executa os testes em modo debug.\n' +
  '▶️ ' +
  colors.green('test:c') +
  '       -> Gera a cobertura de testes da aplicação.\n';

console.info(commands);
