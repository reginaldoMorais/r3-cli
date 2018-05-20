const config = require('./config.env.json');

export const getEnviromentConfig = () => {
  const env = process.env.NODE_ENV || window.__ENV__;
  switch (env) {
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
