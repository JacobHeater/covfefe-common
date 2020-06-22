import { Lazy } from "@app/lazy";

let counter = 0;

class TestClass {
  constructor() {
    counter++;
  }
}

afterEach(() => counter = 0);

test(`It should never call constructor until .value is called`, () => {
  const lazy = new Lazy<TestClass>(() => new TestClass());

  expect(counter).toEqual(0);

  const instance = lazy.value;

  expect(instance).toBeInstanceOf(TestClass);
  expect(counter).toEqual(1);
});

test(`It should only ever call factory one time once .value is called`, () => {
  const lazy = new Lazy<TestClass>(() => new TestClass());

  const instance1 = lazy.value;

  expect(instance1).toBeInstanceOf(TestClass);
  expect(counter).toEqual(1);

  const instance2 = lazy.value;

  expect(instance1).toEqual(instance2);
  expect(counter).toEqual(1);
});

test(`It should throw argument error when factory is undefined`, () => {
  expect(() => new Lazy<TestClass>(null)).toThrow();
});
