import { Entity } from '../entity';
import { Duration } from './duration';
import { Crop } from '../crop/crop';

export class Roast extends Entity {
  name: string;
  description: string;
  crop: Crop;
  duration: Duration;
  roastLevel: string;
  cuppingNotes: string[];

  static collectionName = 'Roasts';
  static isValid(roast: Roast): boolean {
    let isValid = true;

    if (!roast.name || !roast.description || !roast.crop) isValid = false;

    return isValid;
  }
}
