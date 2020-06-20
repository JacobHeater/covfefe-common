import { Entity } from "../entity";
import { Origin } from "../origin/origin";

export class Crop extends Entity {
  origin: Origin;
  year: number;

  static isValid(crop: Crop): boolean {
    let isValid = true;

    if (!crop.origin || !crop.origin.id) {
      isValid = false;
    }

    if (!crop.year || crop.year < 0) {
      isValid = false;
    }

    return isValid;
  }
}
