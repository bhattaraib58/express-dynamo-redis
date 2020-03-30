import fs from 'fs';
import logger from './logger';
/**
 * Get JSON Data From File.
 *
 * @param {*} filePath
 * @param {string} [encoding='utf8']
 * @returns {Array}
 */
export function getJSONDataFromFile(filePath, encoding = 'utf8') {
  try {
    const data = JSON.parse(fs.readFileSync(filePath), encoding);

    return data;
  } catch (err) {
    logger.error(`Error Occurred wile reading ${filePath}\n`, err);

    throw err;
  }
}
