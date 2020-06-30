import { factory } from "@app/factory";

class TestClass {
  data1: boolean;
  data2: number;
}

test('It should create a new instance of the constructor with the properties', () => {
  const instance = factory(TestClass, {
    data1: true,
    data2: 100
  });

  expect(instance.data1).toEqual(true);
  expect(instance.data2).toEqual(100);
});

test('It should throw when the constructor is undefined/null', () => {
  expect(factory.bind(null, null, {})).toThrow(/Argument 'ctor' is required/);
});
