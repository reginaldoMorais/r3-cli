const config = require('./config.env.json');

const getEnviromentConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return config.production;

    case 'staging': {
      console.info('config.staging', config.staging);
      return config.staging;
    }

    default: {
      console.info('config.development', config.development);
      return config.development;
    }
  }
};

export default getEnviromentConfig;
