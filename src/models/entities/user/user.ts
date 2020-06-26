import { Entity } from '../entity';
import { ICreatedOn } from '../icreatedon';
import { Profile } from './profile/profile';

export class User extends Entity implements ICreatedOn {
  username: string;
  password: string;
  isActive: boolean;
  lastLogin: Date;
  loginAttempts: number;
  createdOn: Date;
  profile: Profile;

  static isValid(user: User): boolean {
    return !!user.username && !!user.password;
  }

  static collectionName = 'Users';
}
