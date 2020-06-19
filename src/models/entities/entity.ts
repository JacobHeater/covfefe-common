import { IHaveId } from "./ihaveid";

export abstract class Entity implements IHaveId {
  id: string;
}
