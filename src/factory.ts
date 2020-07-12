/**
 * Provides a convenient means for instantiating
 * and object with the given constructor, while allowing
 * for initialization parameters to be given inline.
 * 
 * @param ctor The object constructor.
 * @param params The initialization params.
 */
export function factory<T>(ctor: new () => T, params: T | { [key: string]: unknown }): T {
  if (!ctor) throw new Error(`Argument 'ctor' is required`);

  return Object.assign(new ctor(), {
    ...params
  });
}
