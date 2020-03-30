import { version, name } from '../package.json';

const config = {
  app: {
    name: name,
    version: version,
    port: process.env.PORT || process.env.APP_PORT || 8080,
    host: process.env.HOST || process.env.APP_HOST || '0.0.0.0'
  },
  environment: {
    nodeENV: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production' ? true : false
  },
  log: {
    level: process.env.LOG_LEVEL || 'info'
  },
  baseAPI: process.env.APP_BASE_PATH || '/',
  dynamoDB: {
    port: process.env.DYNAMO_DB_PORT || 8000,
    host: process.env.DYNAMO_DB_HOST || '0.0.0.0',
    region: process.env.DYNAMO_DB_REGION || 'us-west-2'
  }
};

export default config;
