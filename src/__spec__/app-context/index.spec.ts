import { AppContext } from '@app/app-context';

const appContext = new AppContext('covfefe-project');

test('It should throw exception when constructor is passed empty name string', () => {
  expect(() => new AppContext('')).toThrow();
});

test('It should return the proper baseDir path for the project name', () => {
  expect(appContext.baseDir).toEqual(__dirname.replace(/covfefe-common.*/, '') + 'covfefe-project/bin');
});
