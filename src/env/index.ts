import { LogLevel } from "../logging/winston/log-level";

export class Environment {
  static common = {
    get logLevel(): LogLevel {
      return (process.env.LOG_LEVEL as LogLevel) || LogLevel.error;
    },

    get loggingDisabled(): boolean {
      return this.logLevel === LogLevel.silent;
    },

    get isDevelopment(): boolean {
      return process.env.NODE_ENV === 'development';
    },

    get logStackTrace(): boolean {
      return this.isDevelopment;
    },
  };

  static db = {
    get mongoConnectionString(): string {
      return process.env.MONGO_CONNECTION_STRING;
    },

    get mongoDatabaseName(): string {
      return process.env.MONGO_DEFAULT_DATABASE;
    },

    get adminUserPassword(): string {
      return process.env.MONGO_ADMIN_PASSWORD;
    }
  };
}
