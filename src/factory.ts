/**
 * Provides a convenient means for instantiating
 * and object with the given constructor, while allowing
 * for initialization parameters to be given inline.
 * 
 * @param ctor The object constructor.
 * @param params The initialization params.
 */
export function factory<T>(ctor: new () => T, params: T): T {
  if (!ctor) throw new Error(`Argument 'ctor' is required`);

  return Object.assign<T, T>(new ctor(), {
    ...params
  });
}
