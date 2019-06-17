const yellow = require('colors/safe').yellow;
const red = require('colors/safe').red;
import { getEnviromentConfig } from '../../config';

export default class Looger {
  constructor() {
    this.params = {};
  }

  setParams(params) {
    this.params = params;
  }

  info(messagem) {
    console.info(this.mount(messagem, 'INFO'));
    // console.info(messagem, paymentId);
  }

  warn(messagem) {
    console.warn(yellow(this.mount(messagem, 'WARN')));
    //   console.warn(messagem, paymentId);
  }

  error(messagem) {
    console.error(red(this.mount(messagem, 'ERROR')));
    // console.error(messagem, paymentId);
  }

  mount(messagem, level) {
    const configuration = getEnviromentConfig();
    const date = new Date();

    const logLevel = {
      date: date,
      hostname: configuration.url,
      application: 'mp-pamp',
      version: '1.0.0',
      environment: 'Atlas',
      brand: 'atlas',
      log_message: messagem,
      log_level: level,
      ...this.params,
    };

    return `${logLevel.date} | ${logLevel.application} | ${JSON.stringify(this.params)} | ${logLevel.log_level} - ${
      logLevel.log_message
    }`;
  }
}

const info = messagem => {
  console.info(logger2(messagem, 'INFO'));
  // console.info(messagem, paymentId);
};

const warn = messagem => {
  console.warn(logger2(messagem, 'WARN'));
  //   console.warn(messagem, paymentId);
};

const error = messagem => {
  console.error(logger2(messagem, 'ERROR'));
  // console.error(messagem, paymentId);
};

const logger2 = (messagem, level) => {
  const configuration = getEnviromentConfig();
  const date = new Date();

  const logLevel = {
    date: date,
    hostname: configuration.url,
    application: 'mp-pamp',
    version: '1.0.0',
    environment: 'Atlas',
    brand: 'atlas',
    log_message: messagem,
    log_level: level,
  };

  return `${logLevel.date} | ${logLevel.application} | ${logLevel.log_level} - ${logLevel.log_message}`;
};
