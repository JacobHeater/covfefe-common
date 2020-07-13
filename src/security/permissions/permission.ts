export enum PermissionTarget {
  role = 'role',
  user = 'user',
}

export enum PermissionAction {
  create = 'create',
  read = 'read',
  update = 'update',
  delete = 'delete',
  restricted = 'restricted',
}

export class Permission {
  targetId: string;
  target: PermissionTarget;
  actions: PermissionAction[] = [];
}
