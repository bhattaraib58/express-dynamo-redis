import logger from '../utils/logger';

import * as dbModel from '../models/dbModel';

const TABLE_NAME = 'Movies';

const params = {
  TableName: TABLE_NAME,
  Key: {
    year: 2015,
    title: 'The Big new Movie'
  }
};

dbModel
  .get(params)
  .then((data) => {
    logger.info(data);
  })
  .catch((err) => {
    logger.error(err);
  });
