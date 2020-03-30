import { dynamoDBDocClient, dynamoDB } from './dynamoDB';
import logger from '../utils/logger';

/**
 * DynamoDB Create Table Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function createTable(params) {
  return new Promise((resolve, reject) => {
    dynamoDB.createTable(params, (err, data) => {
      if (err) {
        logger.error(err);

        return reject(err);
      }

      logger.info('Created Table Successfully.');

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Get Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function get(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.get(params, (err, data) => {
      if (err) {
        logger.error(err);

        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common NEW Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function add(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.put(params, (err, data) => {
      if (err) {
        logger.error(err);

        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Update Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function update(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.update(params, (err, data) => {
      if (err) {
        logger.error(err);

        return reject(err);
      }

      return resolve(data);
    });
  });
}