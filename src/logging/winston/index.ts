import * as winston from 'winston';
import { CommonEnvironment } from '../../env';

export interface StreamWriter {
  write(message: string): void;
}

export enum LogLevel {
  error = 'error',
  warn = 'warn',
  info = 'info',
  verbose = 'verbose',
  debug = 'debug',
  silent = 'silent',
}

export const logger = winston.createLogger({
  level: CommonEnvironment.logLevel,
  handleExceptions: true,
  silent: CommonEnvironment.loggingDisabled,
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
