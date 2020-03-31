import * as movieService from '../service/movie';

/**
 * Controller to Fetch All Movies.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function fetchAll(req, res, next) {
  try {
    const data = await movieService.fetchAll();

    res.json({ data });
  } catch (err) {
    next(err);
  }
}

/**
 * Controller to Get Movie By Year And Title.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function fetchByYearAndTitle(req, res, next) {
  try {
    const year = parseInt(req.params.year);
    const title = req.params.title;

    const data = await movieService.fetchByYearAndTitle(year, title);

    res.json({ data });
  } catch (err) {
    next(err);
  }
}
