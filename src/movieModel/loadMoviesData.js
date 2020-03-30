import path from 'path';

import logger from '../utils/logger';
import { getJSONDataFromFile } from '../utils/file';

import * as dbModel from '../models/dbModel';

const movieData = getJSONDataFromFile(path.resolve(__dirname, 'movieData.json'));

const TABLE_NAME = 'Movies';

movieData.forEach((movie) => {
  const params = {
    TableName: TABLE_NAME,
    Item: { ...movie }
  };

  dbModel
    .add(params)
    .then(() => {
      logger.info('Data written successfully:\n');
    })
    .catch((err) => {
      logger.error(err);
    });
});
