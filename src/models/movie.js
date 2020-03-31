import * as dbModel from './dbModel';

const TABLE_NAME = 'Movies';

/**
 * Fetch All Movies From DB.
 *
 * @returns {Promise}
 */
export function fetchAll() {
  const params = {
    TableName: TABLE_NAME
  };

  return dbModel.getAll(params);
}

/**
 * Fetch Movie By Year and Title.
 *
 * @param {*} filter
 * @returns {Promise}
 */
export function fetchByYearAndTitle(filter) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      year: filter.year,
      title: filter.title
    }
  };

  return dbModel.get(params);
}
