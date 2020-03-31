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
