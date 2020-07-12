import { Entity } from "../entity";

export class CollectionPermission extends Entity {
  collectionName: string;

  static collectionName = 'CollectionPermissions';
}
