export class ArgumentInvalidError extends Error {
  constructor(argName: string, message?: string) {
    let _message = `Argument '${argName}' is invalid.`;

    if (message) {
      _message += `: ${message}`;
    }

    super(_message);
  }
}
