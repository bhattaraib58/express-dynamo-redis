import { dynamoDBDocClient, dynamoDB } from './dynamoDB';

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
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Remove Table Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function removeTable(params) {
  return new Promise((resolve, reject) => {
    dynamoDB.deleteTable(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Get All Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function getAll(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.scan(params, (err, data) => {
      if (err) {
        return reject(err);
      }

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
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Create Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function create(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.put(params, (err, data) => {
      if (err) {
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
        return reject(err);
      }

      return resolve(data);
    });
  });
}

/**
 * DynamoDB Common Remove Service.
 *
 * @param {*} params
 * @returns {Promise}
 */
export function remove(params) {
  return new Promise((resolve, reject) => {
    dynamoDBDocClient.delete(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
}
