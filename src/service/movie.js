import * as movieDB from '../models/movie';

/**
 * Service To Fetch All Movies from DB Model.
 *
 * @returns {Array}
 */
export async function fetchAll() {
  const data = await movieDB.fetchAll();

  return data;
}

/**
 * Service To Fetch By Year And Title.
 *
 * @param {*} year
 * @param {*} title
 * @returns {Object}
 */
export async function fetchByYearAndTitle(year, title) {
  const data = await movieDB.fetchByYearAndTitle({
    year,
    title
  });

  return data;
}
