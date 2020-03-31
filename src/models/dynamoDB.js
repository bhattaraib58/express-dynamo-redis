import AWS from 'aws-sdk';
import config from '../config';
import logger from '../utils/logger';

if (config.environment.isProduction) {
  logger.info(`Using Production Database at: https://dynamodb.${config.dynamoDB.region}.amazonaws.com`);

  AWS.config.update({
    endpoint: `https://dynamodb.${config.dynamoDB.region}.amazonaws.com`
  });
} else {
  logger.info(`Using Development Database at: http://${config.dynamoDB.host}:${config.dynamoDB.port}`);

  AWS.config.update({
    region: config.dynamoDB.region,
    endpoint: `http://${config.dynamoDB.host}:${config.dynamoDB.port}`
  });
}

export const dynamoDB = new AWS.DynamoDB();

export const dynamoDBDocClient = new AWS.DynamoDB.DocumentClient();
