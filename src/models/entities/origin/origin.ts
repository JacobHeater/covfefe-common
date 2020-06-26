import { Entity } from '../entity';
import { IHaveUserReference } from '../user/ihave-user-reference';
import { User } from '../user/user';

/**
 * Represents a coffee origin detailing
 * where the coffee came from.
 */
export class Origin extends Entity implements IHaveUserReference {
  country: string;
  estate: string;
  altitude: number;
  user: User;
  
  static readonly collectionName = 'Origins';
  static isValid(origin: Origin): boolean {
    return (
      !!origin.country &&
      !!origin.estate &&
      origin.altitude > 0
    );
  }
}
