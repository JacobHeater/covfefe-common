import { Entity } from "../entity";

/**
 * Represents a coffee origin detailing
 * where the coffee came from.
 */
export class Origin extends Entity {
  country: string;
  estate: string;
  altitude: number;
}
