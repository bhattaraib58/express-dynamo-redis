import logger from '../utils/logger';

import * as dbModel from '../models/dbModel';

const TABLE_NAME = 'Movies';

const params = {
  TableName: TABLE_NAME,
  Key: {
    year: 2015,
    title: 'The Big new Movie'
  },
  UpdateExpression: 'set info.rating=:r, info.plot=:p, info.actors=:a',
  ExpressionAttributeValues: {
    ':r': 5.5,
    ':p': 'Everything happens at once',
    ':a': ['Larry', 'Moe', 'Curly']
  },
  ReturnValues: 'UPDATED_NEW'
};

dbModel
  .update(params)
  .then((data) => {
    logger.info('Data updated Successfully', data);
  })
  .catch((err) => {
    logger.error(err);
  });
