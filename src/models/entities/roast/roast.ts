import { Entity } from '../entity';
import { Duration } from './duration';
import { Crop } from '../crop/crop';
import { IHaveUserReference } from '../user/ihave-user-reference';
import { User } from '../user/user';

export class Roast extends Entity implements IHaveUserReference {
  name: string;
  description: string;
  crop: Crop;
  duration: Duration;
  roastLevel: string;
  cuppingNotes: string[];
  user: User;

  static collectionName = 'Roasts';
  static isValid(roast: Roast): boolean {
    let isValid = true;

    if (!roast.name || !roast.description || !roast.crop) isValid = false;

    return isValid;
  }
}
