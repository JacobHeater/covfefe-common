/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateJwtAsync, decodeJwtAsync } from '@app/security/jwt';

const secret = 'secret_club!';

test('It should generate a jwt token successfully from plain object', async () => {
  const [isValidJwt, token] = await generateJwtAsync({ data: 12345 }, secret);

  expect(isValidJwt).toBe(true);
  expect(token).toBeTruthy();
});

test('It should generate a jwt token successfully from string', async () => {
  const [isValidJwt, token] = await generateJwtAsync('12345', secret);

  expect(isValidJwt).toBe(true);
  expect(token).toBeTruthy();
});

test('It should generate a jwt token successfully from Buffer', async () => {
  const [isValidJwt, token] = await generateJwtAsync(Buffer.from('encode this!'), secret);

  expect(isValidJwt).toBe(true);
  expect(token).toBeTruthy();
});

test('It should return invalid when payload is null', async () => {
  const [isValidJwt, token] = await generateJwtAsync(null, secret);

  expect(isValidJwt).toBe(false);
  expect(token).toBeNull();
});

test('It should return invalid when payload is undefined', async () => {
  const [isValidJwt, token] = await generateJwtAsync(undefined, secret);

  expect(isValidJwt).toBe(false);
  expect(token).toBeNull();
});

test('It should return invalid when secret is null', async () => {
  const [isValidJwt, token] = await generateJwtAsync({ data: 12345 }, null);

  expect(isValidJwt).toBe(false);
  expect(token).toBeNull();
});

test('It should return invalid when secret is undefined', async () => {
  const [isValidJwt, token] = await generateJwtAsync({ data: 12345 }, undefined);

  expect(isValidJwt).toBe(false);
  expect(token).toBeNull();
});

test('It should successfully decode a generated JWT token', async () => {
  const [isValidJwt, token] = await generateJwtAsync({ data: 12345 }, secret);

  expect(isValidJwt).toBe(true);
  expect(token).toBeTruthy();

  const [, decoded] = await decodeJwtAsync(token, secret);

  expect((decoded as any).data).toEqual(12345)
});

test('It should return invalid when token is null', async () => {
  const [isValidJwt, decoded] = await decodeJwtAsync(null, secret);

  expect(isValidJwt).toBe(false);
  expect(decoded).toBeNull();
});

test('It should return invalid when token is undefined', async () => {
  const [isValidJwt, decoded] = await decodeJwtAsync(undefined, secret);

  expect(isValidJwt).toBe(false);
  expect(decoded).toBeNull();
});

test('It should return invalid when secret is null for decode', async () => {
  const [isValidJwt, decoded] = await decodeJwtAsync('', null);

  expect(isValidJwt).toBe(false);
  expect(decoded).toBeNull();
});

test('It should return invalid when secret is undefined for decode', async () => {
  const [isValidJwt, decoded] = await decodeJwtAsync('', undefined);

  expect(isValidJwt).toBe(false);
  expect(decoded).toBeNull();
});
