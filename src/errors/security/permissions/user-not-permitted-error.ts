export class UserNotPermittedError extends Error {
  constructor() {
    super('Unauthorized');
  }
}
