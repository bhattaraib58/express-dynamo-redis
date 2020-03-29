import app from "./app";
import config from "./config";
import logger from "./utils/logger";

app.listen(config.app.port, config.app.host, () => {
  logger.info(`Listening on http://${config.app.host}:${config.app.port}`);
});
