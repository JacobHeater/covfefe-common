export class Lazy<T> {
  constructor(factory: () => T) {
    if (!factory) throw new Error(`Argument 'factory' is required`);

    this._factory = factory;
  }

  private readonly _factory: () => T;
  private _value: T = null;

  get value(): T {
    if (this._value === null) {
      this._value = this._factory();
    }

    return this._value;
  }
}
