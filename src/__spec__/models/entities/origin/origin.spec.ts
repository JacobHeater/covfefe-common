import { Origin } from "@app/models/entities/origin/origin";
import { random } from 'faker';

test('It should validate as valid a properly formed Origin', () => {
  const origin = new Origin();
  origin.altitude = random.number();
  origin.country = random.word();
  origin.estate = random.word();
  
  expect(Origin.isValid(origin)).toBe(true);
});

test('It should validate as invalid a poorly formed Origin', () => {
  const origin = new Origin();

  expect(Origin.isValid(origin)).toBe(false);
});
