export interface IPermissionWaiver {
  waive: boolean;
  reason: WaiverReason;
}

export enum WaiverReason {
  AppStartup,
  UserLogin,
  NoPermissions,
}
