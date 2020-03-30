import AWS from 'aws-sdk';
import config from './config';

AWS.config.update({
  region: config.dynamoDB.region,
  endpoint: `http://${config.dynamoDB.host}:${config.dynamoDB.port}`
});

export const dynamoDB = new AWS.DynamoDB();

export const dynamoDBDocClient = new AWS.DynamoDB.DocumentClient();
