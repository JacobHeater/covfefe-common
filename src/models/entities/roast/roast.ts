import { Entity } from "../entity";
import { Origin } from "../origin/origin";
import { Duration } from "./duration";

export class Roast extends Entity {
  name: string;
  description: string;
  origin: Origin;
  duration: Duration;
  roastLevel: string;
  cuppingNotes: string[];
}
