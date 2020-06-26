import { Crop } from "@app/models/entities/crop/crop";
import { Origin } from "@app/models/entities/origin/origin";
import shortid from "shortid";

test('It should validate as valid a properly formed Crop', () => {
  const crop = new Crop();
  crop.origin = new Origin();
  crop.origin.id = shortid.generate();
  crop.year = 2002;
  
  expect(Crop.isValid(crop)).toBe(true);
});

test('It should validate as invalid a poorly formed Crop', () => {
  const crop = new Crop();

  expect(Crop.isValid(crop)).toBe(false);
});
