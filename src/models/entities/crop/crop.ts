import { Entity } from '../entity';
import { Origin } from '../origin/origin';
import { IHaveUserReference } from '../user/ihave-user-reference';
import { User } from '../user/user';

export class Crop extends Entity implements IHaveUserReference {
  origin: Origin;
  year: number;
  user: User;

  static readonly collectionName = 'Crops';
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
