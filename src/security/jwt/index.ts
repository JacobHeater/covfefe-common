/* eslint-disable @typescript-eslint/ban-types */
import * as jwt from 'jsonwebtoken';
import { logger, fmtErr } from '../../logging/winston';

export type JwtResult<T> = [boolean, T];

export function generateJwtAsync(
  payload: string | object | Buffer,
  secret: string,
  options?: jwt.SignOptions,
): Promise<JwtResult<string>> {
  logger.info(`Entering ${generateJwtAsync.name}()`);
  
  if (!payload) {
    logger.warn(`No payload provided. Returning invalid.`)
    return Promise.resolve([false, null]);
  }

  if (!secret) {
    logger.warn(`No secret provided. Returning invalid.`)
    return Promise.resolve([false, null]);
  }

  return new Promise((resolve) => {
    let _payload = payload;

    // package jsonwebtoken expects plain objects. no protos.
    if (typeof payload === 'object' && !(payload instanceof Buffer)) {
      _payload = { ...payload };
    }

    jwt.sign(_payload, secret, options, (err, result) => {
      if (err) {
        console.log(payload);
        logger.error(`There was an error while generating the JWT.`);
        logger.error(fmtErr(err));

        return resolve([false, null]);
      }

      logger.info(`JWT was generated successfully!`);
      return resolve([true, result]);
    });
  });
}

export function decodeJwtAsync(
  token: string,
  secret: string,
  options?: jwt.VerifyOptions,
): Promise<JwtResult<unknown>> {
  logger.info(`Entering ${decodeJwtAsync.name}()`);

  if (!token) {
    logger.warn(`No token provided. Returning invalid.`)
    return Promise.resolve([false, null]);
  }

  if (!secret) {
    logger.warn(`No secret provided. Returning invalid.`)
    return Promise.resolve([false, null]);
  }

  return new Promise((resolve) => {
    jwt.verify(token, secret, options, (err, decoded) => {
      if (err) {
        return resolve([false, null]);
      }

      return resolve([true, decoded]);
    });
  });
}
