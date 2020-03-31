import logger from '../../utils/logger';

import * as dbModel from '../dbModel';

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
    logger.info('Data:', data);
  })
  .catch((err) => {
    logger.error(err);
  });
