import Logger from './logger';
const logger = new Logger();

/**
 * Valida error do request
 * @param {Object} err
 * @param {string} message
 * @param {Object} params
 */
export const validate = (err, message = '', params = {}) => {
  logger.setParams(params);

  if (err.statusCode === '400') {
    logger.error(`BadRequestException ${message} ${err}`);
    // throw new BadRequestException(err);
  } else if (err.statusCode === 401) {
    logger.error(`UnauthorizedException ${message} ${err}`);
    // throw new UnauthorizedException(err);
  } else if (err.statusCode === 404) {
    logger.error(`NotFoundException ${message} ${err}`);
    // throw new NotFoundException(err);
  } else if (err.statusCode === 409) {
    logger.error(`HTTPConflictException ${message} ${err}`);
    // throw new HTTPConflictException(err);
  } else if (err.statusCode === 500) {
    logger.error(`InternalServerException ${message} ${err}`);
    // throw new InternalServerException(err);
  } else if (err.statusCode === 504) {
    logger.error(`GatewayTimeoutException ${message} ${err}`);
    // throw new GatewayTimeoutException(err);
  } else {
    logger.error(`Exception ${message} ${JSON.stringify(err)}`);
    // throw new Exception(err);
  }
};
