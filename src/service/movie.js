import * as movieDB from '../models/movie';
import redisClient from '../redisClient';

const movieParentKey = 'Movie:';
const redisCacheTime = 60;

/**
 * Service To Fetch All Movies from DB Model.
 *
 * @returns {Array}
 */
export function fetchAll() {
  return new Promise((resolve, reject) => {
    redisClient.get(`${movieParentKey}all`, (err, result) => {
      if (err) {
        reject(err);
      }

      // If Key Exists in Redis Store
      if (result) {
        resolve({ source: 'From Redis Cache', ...JSON.parse(result) });
      } else {
        // Key Doesn't Exist in Redis Store.
        movieDB
          .fetchAll()
          .then((data) => {
            redisClient.setex(`${movieParentKey}all`, redisCacheTime, JSON.stringify(data));
            resolve({ source: 'From  DynamoDB', ...data });
          })
          .catch((err) => reject(err));
      }
    });
  });
}

/**
 * Service To Fetch By Year And Title.
 *
 * @param {*} year
 * @param {*} title
 * @returns {Object}
 */
export function fetchByYear(year, title) {
  return new Promise((resolve, reject) => {
    redisClient.get(`${movieParentKey}fetch:${year}`, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result) {
        resolve({ source: 'From Redis Cache', ...JSON.parse(result) });
      } else {
        movieDB
          .fetchByYear({
            year,
            title
          })
          .then((data) => {
            redisClient.setex(`${movieParentKey}fetch:${year}`, redisCacheTime, JSON.stringify(data));

            resolve({ source: 'From  DynamoDB', ...data });
          })
          .catch((err) => reject(err));
      }
    });
  });
}

/**
 * Service To Fetch By Year And Title.
 *
 * @param {*} year
 * @param {*} title
 * @returns {Object}
 */
export function fetchByYearAndTitle(year, title) {
  return new Promise((resolve, reject) => {
    redisClient.get(`${movieParentKey}fetch:${year}:${title}`, (err, result) => {
      if (err) {
        reject(err);
      }

      if (result) {
        resolve({ source: 'From Redis Cache', ...JSON.parse(result) });
      } else {
        movieDB
          .fetchByYearAndTitle({
            year,
            title
          })
          .then((data) => {
            redisClient.setex(`${movieParentKey}fetch:${year}:${title}`, redisCacheTime, JSON.stringify(data));

            resolve({ source: 'From  DynamoDB', ...data });
          })
          .catch((err) => reject(err));
      }
    });
  });
}

/**
 * Service To Add New Movie Info.
 *
 * @param {*} params
 * @returns
 */
export async function create(params) {
  const data = await movieDB.create(params);

  return data;
}

/**
 * Service To Update Movie Info.
 *
 * @param {*} year
 * @param {*} title
 * @param {*} params
 * @returns
 */
export async function update(year, title, params) {
  const data = await movieDB.update(year, title, params);

  return data;
}

/**
 * Service To Delete Movie Info.
 *
 * @param {*} year
 * @param {*} title
 * @returns
 */
export async function remove(year, title) {
  const data = await movieDB.remove(year, title);

  return data;
}
