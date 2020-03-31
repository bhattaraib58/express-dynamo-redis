import HttpStatus from 'http-status-codes';
import logger from './logger';

/**
 * Build error response for validation errors.
 *
 * @param   {Error} err
 * @returns {Object}
 */
function buildError(err) {
  // Validation errors
  if (err.isJoi) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details:
        err.details &&
        err.details.map((err) => {
          return {
            message: err.message,
            param: err.path.join('.')
          };
        })
    };
  }

  // Instance of Error.
  if (err instanceof Error) {
    let code = HttpStatus.BAD_REQUEST;

    if (err.code) {
      try {
        code = HttpStatus.getStatusCode(err.code);
      } catch (httpCodeError) {
        logger.error(`Error Occurred when parsing http status code\n`, httpCodeError);
      }
    }

    return {
      code: code,
      message: err.message
    };
  }
  // HTTP errors
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error
    };
  }

  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
    details: err
  };
}

export default buildError;
