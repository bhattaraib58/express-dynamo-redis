import logger from '../utils/logger';

import * as dbModel from '../models/dbModel';

const TABLE_NAME = 'Movies';

const params = {
  TableName: TABLE_NAME,
  KeySchema: [
    { AttributeName: 'year', KeyType: 'HASH' },
    { AttributeName: 'title', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'year', AttributeType: 'N' },
    { AttributeName: 'title', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dbModel
  .createTable(params)
  .then((data) => {
    logger.info(`Created Table ${TABLE_NAME} Successfully. Table description JSON: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    logger.error(
      `Unable to create table ${TABLE_NAME}. Error JSON:
    ${JSON.stringify(err, null, 2)}`
    );
  });
