import { dynamoDBDocClient } from '../dynamoDB';
import logger from '../utils/logger';
import { getJSONDataFromFile } from '../utils/file';
import path from 'path';

const movieData = getJSONDataFromFile(path.resolve(__dirname, 'movieData.json'));

movieData.forEach((movie) => {
  const params = {
    TableName: 'Movies',
    Item: { ...movie }
  };

  dynamoDBDocClient.put(params, (err) => {
    if (err) {
      logger.error(err);

      return;
    }

    logger.info('Data written successfully:\n');
  });
});
