import winston, { format } from 'winston';

import config from '../config';

/**
 * Create a new winston logger.
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: config.environment.isProduction
        ? format.combine(format.timestamp(), format.json())
        : format.combine(format.colorize(), format.simple()),
      level: config.log.level
    })
  ]
});

export const logStream = {
  /**
   * A writable stream for winston logger.
   *
   * @param {any} message
   */
  write(message) {
    logger.info(message.toString());
  }
};
export default logger;
