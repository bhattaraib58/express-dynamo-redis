import redis from 'redis';
import logger from './utils/logger';

const redisClient = redis.createClient();

redisClient.on('error', (err) => {
  logger.error('Redis Creation Error:\n', err);
});

export default redisClient;
