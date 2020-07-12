import { User } from '../../models/entities/user/user';
import { IPermitted } from './ipermitted';
import { PermissionTarget, PermissionAction, Permission } from './permission';
import { Role } from '../../models/entities/roles/role';
import { IPermissionWaiver, WaiverReason } from './ipermission-waiver';
import { ArgumentMissingError } from '../../errors/argument-missing-error';
import { ArgumentInvalidError } from '../../errors/argument-invalid-error';
import { UserNotPermittedError } from '../../errors/security/permissions/user-not-permitted-error';

export class PermissionsService {
  isUserPermitted(
    user: User,
    permissionWaiver: IPermissionWaiver,
    resource: IPermitted,
    actions: PermissionAction[],
  ): boolean {
    if (!permissionWaiver)
      permissionWaiver = {
        waive: false,
        reason: null,
      };

    // If no waiver, and no user, then http context could not get a user.
    if (!permissionWaiver.waive && !user)
      throw new UserNotPermittedError();
    if (!resource)
      throw new ArgumentMissingError(`Argument 'resource' is required.`);
    if (!Array.isArray(actions))
      throw new ArgumentInvalidError(
        'actions',
        `Argument 'actions' is expected to be of type [].`,
      );

    if (this.canAllowPermissionsExclusion(permissionWaiver.reason)) {
      return true;
    }

    if (!this.resourceHasPermissions(resource) || this.isUserElevated(user))
      return true;

    const { permitted } = resource;

    const userInPermitted = permitted.some(
      (perm) =>
        perm.target === PermissionTarget.user &&
        perm.targetId === user.id &&
        isPermissionInActions(perm, actions),
    );

    if (userInPermitted) return true;

    const userRoleIds = user.roles.map((role) => role.id);
    const userRoleInPermitted = permitted.some(
      (perm) =>
        perm.target === PermissionTarget.role &&
        userRoleIds.includes(perm.targetId) &&
        isPermissionInActions(perm, actions),
    );

    return userRoleInPermitted;
  }

  resourceHasPermissions(resource: IPermitted): boolean {
    if (!resource) throw new Error(`Argument 'resource' is required.`);

    return (
      !!resource &&
      Array.isArray(resource.permitted) &&
      resource.permitted.length > 0
    );
  }

  isUserElevated(user: User): boolean {
    if (!user) throw new Error(`Argument 'user' is required.`);

    return (user.roles || []).some(
      (r) => r.name === Role.rootRoleName || r.name === Role.adminRoleName,
    );
  }

  private canAllowPermissionsExclusion(reason: WaiverReason): boolean {
    switch (reason) {
      case WaiverReason.AppStartup:
      case WaiverReason.UserLogin:
      case WaiverReason.NoPermissions:
        return true;
      default:
        return false;
    }
  }
}

function isPermissionInActions(
  perm: Permission,
  actions: PermissionAction[],
): boolean {
  if (!perm) throw new Error(`Argument 'perm' is required.`);
  if (!actions) throw new Error(`Argument 'actions' is required.`);

  if (actions.length === 0) return true;

  return (perm.actions || []).some((a) => actions.includes(a));
}
