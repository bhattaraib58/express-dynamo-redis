import { version, name } from "../package.json";

const config = {
  app: {
    name: name,
    version: version,
    port: process.env.PORT || process.env.APP_PORT || 8080,
    host: process.env.HOST || process.env.APP_HOST || "0.0.0.0"
  },
  environment: {
    nodeENV: process.env.NODE_ENV || "development",
    isProduction:
      process.env.NODE_ENV &&
      process.env.NODE_ENV.toLowerCase() === "production"
        ? true
        : false
  },
  log: {
    level: process.env.LOG_LEVEL || "info"
  }
};

export default config;
