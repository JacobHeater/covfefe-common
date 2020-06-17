import { Entity } from "../entity";
import { Origin } from "../origin/origin";

export class Crop extends Entity {
  origin: Origin;
  year: number;
}
