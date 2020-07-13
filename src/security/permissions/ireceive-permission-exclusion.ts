import { IPermissionWaiver } from "./ipermission-waiver";

export interface IReceivePermissionWaiver {
  setPermissionWaiver(waiver: IPermissionWaiver): void;
}
