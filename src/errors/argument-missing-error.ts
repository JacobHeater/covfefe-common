export class ArgumentMissingError<T> extends Error {
  constructor(argName: string, actualVal?: T) {
    if (arguments.length === 2) {
      super(`Argument '${argName}' is required, but got ${actualVal}`);
    } else {
      super(`Argument '${argName}' is required.`);
    }
  }
}
