import logger from '../../utils/logger';

import * as dbModel from '../dbModel';

const TABLE_NAME = 'Movies';

const params = {
  TableName: TABLE_NAME,
  Item: {
    year: 2015,
    title: 'The Big new Movie',
    info: {
      plot: 'Nothing Happens at all',
      rating: 8.2
    }
  }
};

dbModel.add(params).then((data) => {
  logger.info('Data Added successfully', data);
});
