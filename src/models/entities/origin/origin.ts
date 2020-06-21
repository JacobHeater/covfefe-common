import { Entity } from '../entity';

/**
 * Represents a coffee origin detailing
 * where the coffee came from.
 */
export class Origin extends Entity {
  country: string;
  estate: string;
  altitude: number;

  static readonly collectionName = 'Origins';
  static isValid(origin: Origin): boolean {
    return (
      origin.country &&
      origin.estate &&
      origin.altitude > 0
    );
  }
}
