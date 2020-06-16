import { Entity } from "../entity";
import { Origin } from "../origin/origin";

export class Roast extends Entity {
  name: string;
  description: string;
  region: Origin;
}
