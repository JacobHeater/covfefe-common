import * as winston from 'winston';
import { Environment } from '../../env';
import { LogLevel } from './log-level';

export interface StreamWriter {
  write(message: string): void;
}

export const logger = winston.createLogger({
  level: Environment.common.logLevel,
  handleExceptions: true,
  silent: Environment.common.loggingDisabled,
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.colorize(),
      ),
    }),
  ],
  exitOnError: false,
});

export const winstonHttpStream: StreamWriter = {
  write(message: string): void {
    logger.http(message);
  },
};

export const winstonLogStream: StreamWriter = {
  write(message: string): void {
    logger.info(message);
  },
};

export function setLogLevel(level: LogLevel): void {
  if (level === LogLevel.silent) {
    logger.silent = true;
  } else {
    logger.level = level;
  }
}

/**
 * Formats an error as a string for plaintext logging.
 * @param err The error.
 */
export function fmtErr(err: Error): string {
  if (!err) return '';

  const message = err.message || '';
  const stack = err.stack || '';

  return [
    message,
    '----------------',
    stack
  ].join('\n');
}

/**
 * Formats a set of strings into a concatenated
 * string joined by a \n escape.
 * 
 * @param args The lines.
 */
export function fmtLines(...args: string[]): string {
  return [...args].join('\n');
}
