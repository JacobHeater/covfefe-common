export function factory<T>(ctor: new () => T, params: T): T {
  if (!ctor) throw new Error(`Argument 'ctor' is required`);

  return Object.assign<T, T>(new ctor(), {
    ...params
  });
}
