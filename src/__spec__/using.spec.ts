import { IDisposable } from "@app/idisposable";
import { using } from "@app/using";

class TestResource implements IDisposable {
  dispose(): Promise<void> {
    return Promise.resolve();
  }
}

test('It should call IDisposable.dispose() method on end of routine', async () => {
  const resource = new TestResource();
  const spy = jest.spyOn(resource, 'dispose');
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await using(resource, _ => Promise.resolve());

  expect(spy).toHaveBeenCalled();
});

test('It should not throw even if the routine throws an error', async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await expect(using(new TestResource(), _ => {
    throw new Error('Message')
  })).resolves.not.toThrow();
});

test('It should return void when the routine has thrown an error', async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const out = await using(new TestResource(), _ => {
    throw new Error('Message')
  });

  expect(out).toBeUndefined();
});
