import { IHaveId } from './ihaveid';
import { IPermitted } from '../../security/permissions/ipermitted';
import { Permission } from '../../security/permissions/permission';
import { ICreatedOn } from './icreatedon';
import { IModifiedOn } from './imodifiedon';
import { ICreatedBy } from './icreatedby';
import { IModifiedBy } from './imodifiedby';
import { User } from './user/user';

export abstract class Entity
  implements
    IHaveId,
    IPermitted,
    ICreatedOn,
    IModifiedOn,
    ICreatedBy,
    IModifiedBy {
  id: string;
  permitted: Permission[] = [];
  createdOn: Date;
  modifiedOn: Date;
  createdBy: User;
  modifiedBy: User;
}
