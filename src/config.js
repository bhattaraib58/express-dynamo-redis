import { version, name } from "../package.json";

const config = {
  app: {
    name: name,
    version: version,
    port: process.env.PORT || process.env.APP_PORT || 8080,
    host: process.env.HOST || process.env.APP_HOST || "0.0.0.0"
  }
};

export default config;
