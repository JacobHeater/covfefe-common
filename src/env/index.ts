import { LogLevel, setLogLevel } from "../logging/winston";

export class CommonEnvironment {
  static get logLevel(): LogLevel {
    return process.env.LOG_LEVEL as LogLevel || LogLevel.error;
  }

  static set logLevel(level: LogLevel) {
    setLogLevel(level);
  }
  
  static get loggingDisabled(): boolean {
    return CommonEnvironment.logLevel === LogLevel.silent;
  }

  static get isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
  }

  static get logStack(): boolean {
    return this.isDevelopment;
  }
}
