import { Entity } from "../entity";

export class Role extends Entity {
  name: string;
  description: string;

  static readonly collectionName = 'Roles';
  static readonly adminRoleName = 'admin';
  static readonly rootRoleName = 'root';
  static readonly userRoleName = 'user';
  static isValid(role: Role): boolean {
    return !!role.name && !!role.description;
  }
}
