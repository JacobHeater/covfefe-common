import { generate } from 'shortid';
import { IHaveId } from "./ihaveid";

export abstract class Entity implements IHaveId {
  readonly id: string = generate();
}
